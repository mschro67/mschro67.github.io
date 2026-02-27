//by mschro67
//last change: Feb 27 2026

const style=document.querySelector("style");

function setStyle(color,backgroundColor,font,accentColor,footerColor,border,borderRadius){
    style.innerHTML=`/*
    by mschro67
    last change:  Feb 27 2026
*/

body{
    color:${color};
    background-color:${backgroundColor};

    font-family:${font};
    text-align:justify;

    padding:0.5%;
    position:relative;
    z-index:1;

    margin:1%;
}


header{
    position:sticky;
    top:0px;
    z-index:2;
    margin:0px;
}
header,main section,nav{
    border:${border} 2px ${color};
    background:transparent;
    backdrop-filter:blur(2.5px);
    margin:2px;
}
header,nav,footer{
    margin-bottom:1%;
    text-align:center;
}
footer{
    color:${footerColor};
    background-color:transparent;
    backdrop-filter:blur(1.5px);
}


h1,h2{
    text-align: center;
    padding:0px;
}

a{
    color:${color};
    text-decoration-color:${color};
    font-weight:bold;
    display:inline;
}
a:hover{
    color:${accentColor};
    text-decoration-color:${accentColor};
}
a.normal{
    font-weight:normal;
}
a.footer{
    color:${footerColor};
    font-weight:normal;
    text-decoration:none;
}
a.footer:hover{
    color:${footerColor};
    font-weight:bold;
    text-decoration:underline ${footerColor};
}

.green,header h2,code{
    color:${accentColor};
}
code{
    display:inline;
}

canvas{
    z-index:-1;
    position:fixed;
    margin:0px;
    padding:0px;
}

button{
    color:${color};
    background-color:${backgroundColor};

    border:solid 1px ${color};

    font-family:'Courier Prime', monospace;
    text-align: center;

    margin:2px;
}
button:hover{
    color:${accentColor};
    border-color:${accentColor};
}


input{
    color:${color};
    background-color:${backgroundColor};

    border:solid 1px ${color};
    text-align: center;
}
input:hover{
    border-color:${accentColor};
    transform:scale(1.03)
}

select{
    color:${color};
    background-color:${backgroundColor};
    border:solid 1px ${color};
    border-radius:0px;
    text-align:center;
}
select:hover{
    border-color:${accentColor};
    border-radius:0px;
    transform:scale(1.03)
}

progress.bar{
    border:solid ${color};
    width:95%;
    height:20px;
    accent-color:${accentColor};
    background-color: ${backgroundColor};
    text-align: center;
}
progress.bar::-webkit-progress-bar{
    background-color:${backgroundColor};
}
progress.bar::-webkit-progress-value{
    background-color:${accentColor};
}
progress.bar::-moz-progress-bar{
    background-color:${accentColor};
}

.bold{
    font-weight: bold;
}
.center{
    text-align: center;
}
    
summary {
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}
`
}

setStyle("#FFF","#000","'Courier Prime', monospace","#0F0","#777","solid","#0px");
//setStyle("green","blue","'Trebuchet MS'","pink","#777","solid","5px");