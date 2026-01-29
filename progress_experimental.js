//by mschro67
//last change: Jan 29 2026

import { countReset } from "node:console";
import progress from "/progress.json" with {type:"json"};

for (const course of progress){
    document.getElementById(course[short]).value=course["complete"];
    document.getElementById(course[short]).max=course["max"];
    document.getElementById(course[short]+"t").innerText=Math.floor(course["complete"]/course["max"]*100)
};