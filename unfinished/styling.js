const style=document.querySelector("style");

function design(color,backgroundColor,font,accentColor,border,borderRadius){
    style.innerHTML=`body{color:${color};background-color:${backgroundColor};font-family:${font};}
    a{color:${color};text-decoration:none;}
    a:hover{text-decoration:underline;text-decoration-color:${accentColor};color:${accentColor};}
    button{border:${border} 1px ${accentColor}; border-radius:${borderRadius};;}
    section{border:${border} 2px ${accentColor}; border-radius:${borderRadius};}`
}