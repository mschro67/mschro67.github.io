//by mschro67
//last change: Jan 22 2025

const main=document.getElementById("main");
const experiments=document.getElementById("experiments");
const stuff=document.getElementById("stuff");

const subtitle=document.getElementById("subtitle");

function showAll(){
    main.removeAttribute("hidden");
    experiments.removeAttribute("hidden");
    stuff.removeAttribute("hidden");
}

function hideAll(){
    showAll();
    main.toggleAttribute("hidden");
    experiments.toggleAttribute("hidden");
    stuff.toggleAttribute("hidden");
}

function show(section){
    hideAll();
    document.getElementById(section).removeAttribute("hidden");
    subtitle.innerText=section
}

function display(){
    show(document.getElementById("section").value);
}

show("main")