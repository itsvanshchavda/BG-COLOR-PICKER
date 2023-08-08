const color1 = document.getElementById("inputOne");
const color2 = document.getElementById("inputTwo");
const colorInput = document.getElementById("textFiled");
const body = document.body;  

function colorChange() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    
    const cssText = body.style.background + ',';
    css.textContent = cssText;
}


function textInput(){
    
    var a = colorInput.value;
    body.style.background = a;
}

const css = document.getElementById("cssText"); 
color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
