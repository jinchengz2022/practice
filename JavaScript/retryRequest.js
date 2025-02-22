async function retryRequest(request, limit = 3, currentNum = 1) {
  try {
    const result = await request();
    if (result) {
      return result;
    }
    if (result.error && currentNum < limit) {
      return retryRequest(request, limit, currentNum + 1);
    }
  } catch (error) {
    if (currentNum < limit) {
      return retryRequest(request, limit, currentNum + 1);
    } else {
      return error;
    }
  }
}

function checkPaymentStatus() {
  return new Promise((resolve) => {
    // 模拟服务器返回支付状态
    const statuses = ["pending", "success", "failed"];
    const randomIndex = Math.floor(Math.random() * 3);
    setTimeout(() => {
      resolve(statuses[randomIndex]);
    }, 1000);
  });
}

async function a() {
  const res = await checkPaymentStatus();
  if (res === "success" || res === "failed") {
    return res;
  } else {
    return a();
  }
}

async function pollPaymentStatus(callback) {
  // 实现逻辑
  const res = await a();
  callback(res);
}
// 示例调用
pollPaymentStatus((status) => {
  console.log("支付状态:", status);
});
