function hello(val, callback) {
  setTimeout(() => {
    callback("Hello, " + val)
  }, 500)
}

let data;

hello("Tanjid", (greet) => {
  // console.log(greet)
  data = greet
})

console.log(data)