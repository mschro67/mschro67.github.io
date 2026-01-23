//by mschro67
//last change: Jan 23 2026

function c(sections,done) { //c for course progress in percent
  return Math.floor(100 / sections * done);
}

courses={
  "py":c(14,14),
  "pydev":c(9,9),
  "html":c(5,5),
  "swift":c(7,4.66),
  "sql":c(6,4.42),
  "js":c(16,9.5),
  "back":c(9,2+0.91+0.36+0.81+0.62),
  "front":c(15,4+0.75+0.9+0.36),
  "css":c(4,2.06),
  "full":c(20,4.89+0.63),
}

for (const name of Object.keys(courses)){
  document.getElementById(name).value=courses[name]
  document.getElementById(name+"t").innerHTML=courses[name]
};
