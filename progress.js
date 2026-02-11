//by mschro67
//last change: Feb 11 2026

import progress from "/data/progress.json" with {type:"json"};

for (const course of progress){
    const current=document.getElementById((course["type"]==="path" ? "paths":"langs"));
    current.innerHTML+=`${(course["full_name"] ? `<abbr title='${course["full_name"]}'>${course["name"]}</abbr>`:course["name"])}<br><progress class=bar value="${course["complete"]}" max=${course["max"]}></progress><br>${Math.floor(course["complete"]/course["max"]*100)}%<br><br>`;
};