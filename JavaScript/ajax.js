// function get() {
//   //创建ajax实例
//   let req = new XMLHTTPRequest()
//   if (req) {
//     //执行open 确定要访问的链接 以及同步异步
//     req.open('GET', 'http://test.com/?keywords=手机', true)
//     //监听请求状态
//     req.onreadystatechange = function () {
//       if (req.readystate === 4) {
//         if (req.statue === 200) {
//           console.log('success')
//         } else {
//           console.log('error')
//         }
//       }
//     }
//     //发送请求
//     req.send()
//   }
// }
console.log('1');
setTimeout(function() {
  console.log('2');
  process.nextTick(function() {
      console.log('3');
  })
  new Promise(function(resolve) {
      console.log('4');
      resolve();
  }).then(function() {
      console.log('5')
  })
})
process.nextTick(function() {
  console.log('6');
})
new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  console.log('8')
})

setTimeout(function() {
  console.log('9');
  process.nextTick(function() {
      console.log('10');
  })
  new Promise(function(resolve) {
      console.log('11');
      resolve();
  }).then(function() {
      console.log('12')
  })
})