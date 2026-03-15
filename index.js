let bin = document.querySelector(".bin")
let paper = document.querySelector(".paper")
let btnThrow = document.querySelector(".btnThrow")


btnThrow.addEventListener("click", function(){
paper.style.left = "1200px"
paper.style.top = "300px"

setTimeout(function(){
paper.style.left = "1350px"
paper.style.top = "600px"


}, 500)

})

