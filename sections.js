//by mschro67
//last change: Jan 23 2026

const contents=document.getElementsByTagName("main");
const subtitle=document.getElementById("subtitle");
const titles={
    "progress":"My Progress",
    "html_main":"HTML Basics",
    "css_main":"CSS Basics",
    "js_main":"JavaScript Basics",
}

function showAll(){
    for (const content of contents){
        if (content.hasAttribute("hidden")){
            content.removeAttribute("hidden");
        }
    }
}

function hideAll(){
    for (const content of contents){
        if (!content.hasAttribute("hidden")){
            content.toggleAttribute("hidden");
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