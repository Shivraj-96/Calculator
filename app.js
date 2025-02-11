let display=document.querySelector(".display");

let btn=document.querySelectorAll(".value");

btn.forEach((btns)=> {
    btns.addEventListener("click",function(){
    let value=btns.innerText;
    console.log(value);

    if(value == "="){
       clearResult();
    }else if(value =="CE"){
        clearEntry();
    }else if(value == "C"){
        clearDisplay();
    }else if(value == "del"){
        deleteLast();
    }else{
        appendToDisplay(value);
    }
}); 
})

function appendToDisplay(value){
    display.innerText+=value;
}
function clearEntry(){
    display.innerText=display.innerText.slice(0,-1);
}
function clearDisplay(){
    display.innerText=" ";
}
function deleteLast(){
    display.innerText=display.innerText.slice(0,-1);
}

function clearResult(){
    let result = eval(display.innerText);
    display.innerText = result;
}

