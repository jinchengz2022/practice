function get() {
  //创建ajax实例
  let req = new XMLHTTPRequest()
  if (req) {
    //执行open 确定要访问的链接 以及同步异步
    req.open('GET', 'http://test.com/?keywords=手机', true)
    //监听请求状态
    req.onreadystatechange = function () {
      if (req.readystate === 4) {
        if (req.statue === 200) {
          console.log('success')
        } else {
          console.log('error')
        }
      }
    }
    //发送请求
    req.send()
  }
}
