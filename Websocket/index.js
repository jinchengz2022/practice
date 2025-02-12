const { EventEmitter } = require("events");
const http = require("http");
const crypto = require("crypto");

const OPCODES = {
  CONTINUE: 0,
  TEXT: 1, // 文本
  BINARY: 2, // 二进制
  CLOSE: 8,
  PING: 9,
  PONG: 10,
};

// websocket 升级协议时候的 Sec-WebSocket-Key 对应的 Sec-WebSocket-Accept 的计算过程
// websocket 请求头中的 Sec-WebSocket-Accept
function hashKey(key) {
  const sha1 = crypto.createHash("sha1");
  // 258这一串是 websocket 的握手加密密钥
  sha1.update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
  return sha1.digest("base64");
}

function handleMask(maskBytes, data) {
  const payload = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i++) {
    payload[i] = maskBytes[i % 4] ^ data[i];
  }
  return payload;
}



class MyWebSocket extends EventEmitter {
  constructor(options) {
    super(options);

    const server = http.createServer();

    server.listen(options.port || 8000);

    // 监听服务，当 upgrade 事件发生时
    server.on("upgrade", (req, socket) => {
      this.socket = socket;
      socket.setKeepAlive(true);

      // 处理客户端传过来的 sec-websocket-key 后给 Sec-WebSocket-Accept
      const resHeaders = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        "Sec-WebSocket-Accept: " + hashKey(req.headers["sec-websocket-key"]),
        "",
        "",
      ].join("\r\n");
      socket.write(resHeaders);

      // 接受传输的数据
      socket.on("data", (data) => {
        // console.log({data});
        this.processData(data);
      });
      socket.on("close", (error) => {
        this.emit("close");
      });
    });
  }

  // 解析 buffer 数据
  processData(data) {
    // 读取 8 位无符号整数的内容，也就是一个字节的内容，偏移 0 个字节
    const byte1 = data.readUInt8(0);
    // 取出后四位（4位 opcode）
    let opcode = byte1 & 0x0f;
  
    const byte2 = data.readUInt8(1);
    const str2 = byte2.toString(2);
    const MASK = str2[0];
  
    let curByteIndex = 2;
  
    // （7位 Payload长度）
    let payloadLength = parseInt(str2.substring(1), 2);
    if (payloadLength === 126) {
      payloadLength = data.readUInt16BE(2);
      curByteIndex += 2;
    } else if (payloadLength === 127) {
      payloadLength = data.readUInt64BE(2);
      curByteIndex += 8;
    }
  
    let realData = null;
  
    if (MASK) {
      const maskKey = data.slice(curByteIndex, curByteIndex + 4);
      curByteIndex += 4;
      const payloadData = data.slice(curByteIndex, curByteIndex + payloadLength);
      realData = handleMask(maskKey, payloadData);
    } else {
      realData = data.slice(curByteIndex, curByteIndex + payloadLength);
    }

    this.handleRealData(opcode, realData)
  }

  handleRealData(opcode, realDataBuffer) {
    switch (opcode) {
      case OPCODES.TEXT:
        this.emit("data", realDataBuffer.toString("utf8"));
        break;
      case OPCODES.BINARY:
        this.emit("data", realDataBuffer);
        break;
      default:
        this.emit("close");
        break;
    }
  }
}

const ws = new MyWebSocket({ port: 8080 });

ws.on("data", (data) => {
  console.log("receive data: " + data);
});

ws.on("close", (code, reason) => {
  console.log({ code, reason });
});

