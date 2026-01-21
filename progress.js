//by mschro67
//last change: Jan 18 2026

class Course {
  constructor(name, sections) {
    this.name = name;
    this.sections = sections;
    this.percent = 0;
    this.complete = 0;
    this.gold = 0;
  }

  progress(sections, gold) {
    this.complete = sections;
    this.gold = gold;
    this.percent = (100 / this.sections) * this.complete;
  }
};

py=new Course("Python",14)
html=new Course("HTML",5)
sql=new Course("SQL",6)
css=new Course("CSS",4)
swift=new Course("Swift",7)
react=new Course("React",3)
js=new Course("JavaScript",16)
full=new Course("Full Stack Developer",20)
pydev=new Course("Python Developer",9)
front=new Course("Front End Developer",15)
back=new Course("Back End Developer",9)
ts=new Course("TypeScript",4)

py.progress(14,14)
html.progress(5,2)
pydev.progress(9,1)
sql.progress(4.42,4)
css.progress(2.06,1)
full.progress(4.89+0.63,1)
js.progress(9.5,2)
swift.progress(4.66,4)
react.progress(0,0)
front.progress(4+0.75+0.9+0.36,1)
back.progress(2+0.91+0.36+0.81+0.62,0)
ts.progress(0,0);

courses=[py,pydev,html,swift,sql,js,back,front,css,full];
IDs=["py","pydev","html","swift","sql","js","back","front","css", "full"]
for (let x=0;x<courses.length;x+=1){
  document.getElementById(IDs[x]).value=courses[x].percent
  document.getElementById(IDs[x]+"t").innerHTML=Math.floor(courses[x].percent)
};
