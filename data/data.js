//by mschro67
//last change: Jan 24 2026

import people from "/data/people.json" with { type: "json" };

let ages={};
let jobs={};
let names={};
const persons=people.length;
let ages_avg=0;

function table(header,data) {
    let table=`<table><tr><th>${header}</th><th>Proportion</th><th>People</th><th>Percent</th></tr>`;
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
}

ages_avg/=persons;

function display(){
    switch (document.getElementById("selected").value){
        case "ages":
            document.getElementById("container").innerHTML=`persons: ${persons}<br>${table("Age",ages)}average age: ${ages_avg}`;
            break;
        case "occupations":
            document.getElementById("container").innerHTML=`persons: ${persons}<br>${table("Occupation",jobs)}`;
            break;
        case "names":
            document.getElementById("container").innerHTML=`persons: ${persons}<br>${table("First Name",names)}`;
            break;
        default:
            document.getElementById("container").innerHTML=`persons: ${persons}`;
    }
    document.getElementById("style").innerHTML=`progress::-webkit-progress-value {background-color:${document.getElementById("color").value};}progress::-moz-progress-bar {background-color:${document.getElementById("color").value};}`;
}

window.display=display;
window.onload=display;