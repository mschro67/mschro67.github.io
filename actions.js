//by mschro67
//last change: Jan 22 2026

let isBold = true
const el = document.getElementById("text")

function bold(){
    isBold = !isBold
    el.classList.toggle("bold")
    el.innerHTML = `This text gets ${(isBold ? "bold" : "normal")} when you press the button.`
}

let number=0
function action(){
    number++
    el=document.getElementById("place")
    el.innerHTML=number
}
    
function enter(){
    document.getElementById("out").innerHTML=document.getElementById("select").value
}