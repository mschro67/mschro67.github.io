//by mschro67
//last change: Jan 29 2026

const sections=document.getElementsByTagName("main");
const subtitle=document.getElementById("subtitle");
const titles={
    "progress":"My Progress",
    "html_main":"HTML Basics",
    "css_main":"CSS Basics",
    "js_main":"JavaScript Basics"
}

function showAll(){
    for (const section of sections){
        if (section.hasAttribute("hidden")){
            section.removeAttribute("hidden");
        }
    }
}

function hideAll(){
    for (const section of sections){
        if (!section.hasAttribute("hidden")){
            section.toggleAttribute("hidden");
        }
    }
}

function show(section){
    hideAll();
    document.getElementById(section).removeAttribute("hidden");
    subtitle.innerText=titles[section];

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

show("progress");