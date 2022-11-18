const asyncFn = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 2000);
};

asyncFn(console.log);
