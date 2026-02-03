//by mschro67
//last change: Feb 3 2026

import progress from "/data/progress.json" with {type:"json"};

for (const course of progress){
    document.getElementById(course["short"]).value=course["complete"];
    document.getElementById(course["short"]).max=course["max"];
    document.getElementById(course["short"]+"t").innerText=Math.floor(course["complete"]/course["max"]*100)
};