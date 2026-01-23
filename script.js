//by mschro67
//last change: Jan 23 2025

const contents=document.getElementsByTagName("main");
const subtitle=document.getElementById("subtitle");

function showAll(){
    for (const content of contents){
        content.removeAttribute("hidden");
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
    subtitle.innerText=section;

    window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

function display(){
    show(document.getElementById("section").value);
}

show("main")