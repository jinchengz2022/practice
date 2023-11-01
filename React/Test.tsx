function test() {
  let start = 1;
  
  setInterval(() => {
    if (start === 3) {
      start = 1;
    } else {
      start++;
    }
  }, 10000);
}

test();
