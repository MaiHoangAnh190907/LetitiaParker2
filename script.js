console.log("Hoàng Anh xấu trai")
const srollToTopBtn = document.getElementsByClassName("btn-up")[0]
console.log(srollToTopBtn)
console.dir(srollToTopBtn)
srollToTopBtn.addEventListener("click", function() {
  console.log("Hoàng Anh xinh trai 🥲")
  document.documentElement.scrollTop = 0
})