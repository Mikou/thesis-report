function cbExample(cb) {

    setTimeout(function () {
        cb("hello world");
    }, 1000);

}

cbExample(function (result) {
    console.log(result)
});


function promiseExample () {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve("hello world");
    }, 1000);
  });
}

promiseExample.then(function(result) {
  console.log(result);
});