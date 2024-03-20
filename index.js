

const right = document.querySelector(".right")
const groupBox = document.querySelector(".box")
const left = document.querySelector(".leftBtn")

left.addEventListener("click",()=>{
    body.style.background = 'black'
})

right.addEventListener("click",()=>{
    groupBox.style.marginLeft = "0px"
    groupBox.style.background = "yellow"

})

const body = document.querySelector("body")

const input = document.createElement("input")
input.type='color'
body.append(input)
const button = document.createElement("button")
body.append(button)
button.addEventListener("click",()=>{
    console.log("hello!");
})

