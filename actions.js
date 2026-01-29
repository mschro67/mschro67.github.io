//by mschro67
//last change: Jan 29 2026

let isBold = true;
const text = document.getElementById("text");

let current=0;
const number=document.getElementById("number");

const out=document.getElementById("out");
const select=document.getElementById("select")

function bold(){
    isBold = !isBold;
    text.classList.toggle("bold");
    text.innerText = `This text gets ${(isBold ? "bold" : "normal")} when you press the button.`;
}

function action(){
    number++;
    number.innerText=number;
}
    
function enter(){
    out.innerText=select.value;
}