//by mschro67
//last change: Jan 24 2026

import data from "/data/data.json" with { type: "json" };

let options={}
const persons=data.length;

const style=document.getElementById("style");
const selected=document.getElementById("selected");
const color=document.getElementById("color");
const out=document.getElementById("out");

function table(header,data) {
    let table=`<table><tr><th>${header.charAt(0).toUpperCase() + header.slice(1).replace("_"," ")}</th><th>Proportion</th><th>People</th><th>Percent</th></tr>`;
    for (const key in data) {
        table+=`<tr><td>${key}</td><td><progress value=${data[key]/persons} max=1></progress></td><td>${data[key]}</td><td>${Math.floor(data[key]/persons*1000)/10}<span style="color:${color.value};">%</span></td></tr>`;
    }
    table+="</table>";
    return table;
}

function display(){
    if (selected.value==="-"){
        out.innerHTML=`<span style='color:${color.value};'>select data</span>`;
    }else{
        out.innerHTML=table(selected.value,options[selected.value]);
        style.innerHTML=`progress::-webkit-progress-value {background-color:${color.value};}progress::-moz-progress-bar {background-color:${color.value};}th{border:solid 1px ${color.value}}`;
    }
}

function addValue(option,value){
    if (!options[option]){
        options[option] = {};
    }

    if (options[option][value]) {
        options[option][value] += 1;
    } else {
        options[option][value] = 1;
    }
}

function loadOptions(){
    for (const option in options){
        selected.innerHTML+=`<option>${option}</option>`;
    }
}


for (const person of data) {
    for (const option in person){
        if (option==="id"){
            continue;
        }else{
            if (Array.isArray(person[option])){
                for (const item of person[option]){
                    addValue(option,item);
                }
            }else{
                addValue(option,person[option]);
            }
        }
    }
}

loadOptions();
display();
window.display=display;