//by mschro67
//last change: Feb 13 2026

const sections=document.getElementsByTagName("main");
const subtitle=document.getElementById("subtitle");
const titles={
    "progress":"My progress",
    "html_main":"HTML basics",
    "css_main":"CSS basics",
    "js_main":"JavaScript basics",
    "about":"About this website"
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

show("about");