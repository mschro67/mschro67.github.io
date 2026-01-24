//by mschro67
//last change: Jan 24 2026

import people from "/data/people.json" with { type: "json" };

let ages={};
let jobs={};
let names={};
let hobbies={};
const persons=people.length;
let ages_avg=0;

function table(header,data) {
    let sorted=Object.entries(data).sort((a, b) => b[1] - a[1]);
    data=Object.fromEntries(sorted);
    let table=`<table><tr><th>${header.charAt(0).toUpperCase() + header.slice(1)}</th><th>Proportion</th><th>People</th><th>Percent</th></tr>`;
    for (const key in data) {
        table+=`<tr><td>${key}</td><td><progress value=${data[key]/persons} max=1></progress></td><td>${data[key]}</td><td>${data[key]/persons*100}%</td></tr>`;
    }
    table+="</table>";
    return table;
}

for (const person of people) {
    if (ages[person.age]) {
        ages[person.age] += 1;
    } else {
        ages[person.age] = 1;
    }
    ages_avg+=person.age;
    if (jobs[person.occupation]) {
        jobs[person.occupation] += 1;
    } else {
        jobs[person.occupation] = 1;
    }
    if (names[person.name.split(" ")[0]]) {
        names[person.name.split(" ")[0]] += 1;
    } else {
        names[person.name.split(" ")[0]] = 1;
    }
    for (const hobby of person.hobbies) {
        if (hobbies[hobby]) {
            hobbies[hobby] += 1;
        } else {
            hobbies[hobby] = 1;
        }
    }
}

ages_avg/=persons;
const categories={
    "age": ages,
    "occupation": jobs,
    "name": names,
    "hobby": hobbies
}

function display(){
    if (document.getElementById("selected").value==="-"){
        document.getElementById("container").innerHTML="<span style='color:#777;'>select data</span>";
    }else{
        const selected=document.getElementById("selected").value;
        document.getElementById("container").innerHTML=table(selected,categories[selected]);
        document.getElementById("style").innerHTML=`progress::-webkit-progress-value {background-color:${document.getElementById("color").value};}progress::-moz-progress-bar {background-color:${document.getElementById("color").value};}`;
    }
}

window.display=display;
window.onload=display;