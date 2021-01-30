const divs = document.querySelectorAll("div");

function logText(e){
    this.style.background = "yellow";
    e.stopPropagation();
}

divs.forEach( div => div.addEventListener("click", logText, {once:true}));