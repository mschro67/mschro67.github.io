//by mschro67
//last change: Feb 13 2026

const sections=document.getElementsByTagName("main");
const subtitle=document.getElementById("subtitle");
const title=document.getElementById("title");
const titles={
    "progress":"My progress",
    "html_main":"HTML basics",
    "css_main":"CSS basics",
    "js_main":"JavaScript basics",
    "about":"About this website"
}
const keywords={
    "progress":"Progress",
    "html_main":"HTML",
    "css_main":"CSS",
    "js_main":"JavaScript",
    "about":"About"
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

    title.innerText="My Little Website - "+keywords[section];
}

show("about");