//by mschro67
//last change: Jan 24 2026

data=[{name: "John Doe",age: 20,occupation: "Software Developer"},{name: "Jane Smith",age: 25,occupation: "Graphic Designer"},{name: "John Brown",age: 40,occupation: "Project Manager"},{name: "Lisa White",age: 28,occupation: "Data Analyst"},{name: "Tom Green",age: 35,occupation: "Marketing Specialist"},{name: "Emily Black",age: 32,occupation: "HR Manager"},{name: "Michael Blue",age: 45,occupation: "Sales Executive"},{name: "Sarah Yellow",age: 29,occupation: "Content Writer"},{name: "David Orange",age: 38,occupation: "Business Consultant"},{name: "Laura Purple",age: 27,occupation: "UX Designer"},{name: "Chris Red",age: 33,occupation: "DevOps Engineer"},{name: "Anna Pink",age: 31,occupation: "Product Manager"},{name: "James Gray",age: 36,occupation: "Financial Analyst"},{name: "Olivia Cyan",age: 24,occupation: "Social Media Manager"},{name: "Daniel Lime",age: 39,occupation: "IT Support Specialist"},{name: "Sophia Teal",age: 26,occupation: "Research Scientist"},{name: "Matthew Brown",age: 34,occupation: "Quality Assurance Engineer"},{name: "Mia Violet",age: 20,occupation: "Intern"},{name: "Matthew Gold",age: 41,occupation: "Operations Manager"},{name: "Isabella Silver",age: 22,occupation: "Junior Developer"}];

ages={}
occupations={}
names={}
persons=data.length;
ages_avg=0;

for (const person of data) {
    if (ages[person.age]) {
        ages[person.age] += 1;
    } else {
        ages[person.age] = 1;
    }
    ages_avg+=person.age;
    if (occupations[person.occupation]) {
        occupations[person.occupation] += 1;
    } else {
        occupations[person.occupation] = 1;
    }
    if (names[person.name.split(" ")[0]]) {
        names[person.name.split(" ")[0]] += 1;
    } else {
        names[person.name.split(" ")[0]] = 1;
    }
}

ages_avg/=persons;

ages_table="<table><tr><th>Age</th><th>Proportion</th><th>People</th><th>Percent</th></tr>";
for (const age in ages) {
    ages_table+=`<tr><td>${age}</td><td><progress value=${ages[age]/persons} max=1></progress></td><td>${ages[age]}</td><td>${ages[age]/persons*100}%</td></tr>`;
}
ages_table+="</table>";

jobs_table="<table><tr><th>Occupation</th><th>Proportion</th><th>People</th><th>Percent</th></tr>";
for (const job in occupations) {
    jobs_table+=`<tr><td>${job}</td><td><progress value=${occupations[job]/persons} max=1></progress></td><td>${occupations[job]}</td><td>${occupations[job]/persons*100}%</td></tr>`;
}
jobs_table+="</table>";

names_table="<table><tr><th>Name</th><th>Proportion</th><th>People</th><th>Percent</th></tr>";
for (const name in names) {
    names_table+=`<tr><td>${name}</td><td><progress value=${names[name]/persons} max=1></progress></td><td>${names[name]}</td><td>${names[name]/persons*100}%</td></tr>`;
}
names_table+="</table>";

function show(){
    switch (document.getElementById("selected").value){
        case "ages":
            document.getElementById("container").innerHTML=`persons: ${persons}<br>${ages_table}average age: ${ages_avg}`;
            break;
        case "occupations":
            document.getElementById("container").innerHTML=`persons: ${persons}<br>${jobs_table}`;
            break;
        case "names":
            document.getElementById("container").innerHTML=`persons: ${persons}<br>${names_table}`;
            break;
        default:
            document.getElementById("container").innerHTML=`persons: ${persons}`;
    }
    document.getElementById("style").innerHTML=`progress::-webkit-progress-value {background-color:${document.getElementById("color").value};}progress::-moz-progress-bar {background-color:${document.getElementById("color").value};}`;
    /*document.getElementById("container").innerHTML=`persons: ${persons}<br>${ages_table}average age: ${ages_avg}<br>${jobs_table}<br>${names_table}`;*/
}