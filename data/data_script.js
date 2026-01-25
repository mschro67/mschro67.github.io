//by mschro67
//last change: Jan 24 2026

import data from "/data/data.json" with { type: "json" };

let attributes={}
const entities=data.length;

const style=document.getElementById("style");
const selected=document.getElementById("selected");
const color=document.getElementById("color");
const out=document.getElementById("out");

const filter_selected=document.getElementById("filter_selected");
const filter_value=document.getElementById("filter_value");

function table(header,values) {
    let table=`<table><tr><th>${header.charAt(0).toUpperCase() + header.slice(1).replace("_"," ")}</th><th>Relative</th><th>Absolute</th><th>Percent</th></tr>`;
    let max=0;
    for (const key in values){
        if (values[key]>max){
            max=values[key];
        }
    }
    for (const key in values) {
        if (header!=filter_selected.value){
            return "The filter attribute must be selected attribute!";
        }else if (attributes[filter_selected][key]!=filter_value.value){
            table+=`<tr><td>${key}</td><td><progress value=${values[key]/entities} max=${max+1}></progress></td><td>${values[key]}</td><td>${Math.floor(values[key]/entities*1000)/10}%</td></tr>`;
        }
    }
    table+="</table>";
    return table;
}

function submit(){
    if (selected.value==="-") {
        out.innerHTML=`<span style='color:${color.value};'>select data</span>`;
    }else if (selected.value==="all") {
        let table="<table><tr>";
        let count=0;
        for (const attribute in attributes) {
            table+=`<th>${attribute.charAt(0).toUpperCase() + attribute.slice(1).replace("_"," ")}</th>`;
            count++;
        }
        table+="</tr>";
        for (const entity of data){
            if (entity[filter_selected.value]==filter_value.value || filter_selected.value=="-"){
                table+="<tr>";
                for (const attribute in attributes){
                    table+=`<td>${entity[attribute]}</td>`;
                }
                table+="</tr>";
            }
        }
        out.innerHTML=table;
        style.innerHTML=`th{border:solid 1px ${color.value}}th,td{width:${100/count}%}`;
    }else{
        let table=`<table><tr><th>${selected.value.charAt(0).toUpperCase() + selected.value.slice(1).replace("_"," ")}</th><th>Relative</th><th>Absolute</th><th>Percent</th></tr>`;
        table+="</tr>";
        let max=0;
        for (const key in attributes[selected.value]){
            if (attributes[selected.value][key]>max){
                max=attributes[selected.value][key];
            }
        }
        for (const key in attributes[selected.value]){
            if (key==filter_value.value || filter_selected.value=="-") {
                table+=`<tr><td>${key}</td><td><progress value=${attributes[selected.value][key]} max=${max+1}></progress></td><td>${attributes[selected.value][key]}</td><td>${Math.floor(attributes[selected.value][key]/entities*1000)/10}%</td></tr>`;
            }
        }
        out.innerHTML=table;
        style.innerHTML=`progress::-webkit-progress-bar{background-color:#FFF}progress::-webkit-progress-value {background-color:${color.value};}progress::-moz-progress-bar {background-color:${color.value};}th{border:solid 1px ${color.value}}`;
    }
}

function addValue(attribute,value){
    if (!attributes[attribute]){
        attributes[attribute] = {};
    }

    if (attributes[attribute][value]) {
        attributes[attribute][value] += 1;
    } else {
        attributes[attribute][value] = 1;
    }
}

function loadOptions(){
    for (const attribute in attributes){
        selected.innerHTML+=`<option>${attribute}</option>`;
        filter_selected.innerHTML+=`<option>${attribute}</option>`;
    }
}

for (const entity of data) {
    for (const attribute in entity){
        if (attribute==="id"){
            continue;
        }else{
            if (Array.isArray(entity[attribute])){
                for (const item of entity[attribute]){
                    addValue(attribute,item);
                }
            }else{
                addValue(attribute,entity[attribute]);
            }
        }
    }
}

loadOptions();
submit();
window.submit=submit;