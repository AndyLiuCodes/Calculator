function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}

function operate(){

}

function searchString(stringCont){
    for(let i = 0; i < stringCont.length; i++){
        if(stringCont[i] == "."){
            return i;
        }
    }
    return false;
}

function calculatorInput(number){
    const textField = document.querySelector("#result");

    if(textField.textContent[0] == "-"){
        textField.textContent = "-" + String(number);
        return;
    }
    if(textField.textContent == "0" && number == 0){
        return;
    }

    if(textField.textContent == "0"){
        textField.textContent = String(number);
        expression += String(number);
        return;
    }

    if(textField.textContent.length > 17){
        alert("Exceeded max number of digits");
        return;
    }

    textField.textContent += String(number);
    expression += String(number);
}

let expression = "";

//Number functionality
document.getElementById("nine").addEventListener("click", function(){
    calculatorInput(9);
});

document.getElementById("eight").addEventListener("click", function(){
    calculatorInput(8);
});

document.getElementById("seven").addEventListener("click", function(){
    calculatorInput(7);
});

document.getElementById("six").addEventListener("click", function(){
    calculatorInput(6);
});

document.getElementById("five").addEventListener("click", function(){
    calculatorInput(5);
});

document.getElementById("four").addEventListener("click", function(){
    calculatorInput(4);
});

document.getElementById("three").addEventListener("click", function(){
    calculatorInput(3);
});

document.getElementById("two").addEventListener("click", function(){
    calculatorInput(2);
});

document.getElementById("one").addEventListener("click", function(){
    calculatorInput(1);
});

document.getElementById("zero").addEventListener("click", function(){
    calculatorInput(0);
});
//

document.getElementById("clear").addEventListener("click", function(){
    const textField = document.querySelector("#result");
    textField.textContent = "0";
    expression = "";
});


document.getElementById("sign").addEventListener("click", function(){
    const textField = document.querySelector("#result");

    if(textField.textContent[0] == "-"){
        textField.textContent = textField.textContent.substring(1);
        return;
    }

    textField.textContent = "-" + textField.textContent;
});

document.getElementById("decimal").addEventListener("click", function(){
    const textField = document.querySelector("#result");
    
    let index = searchString(textField.textContent); 
    
    if (index != false){
        textField.textContent = textField.textContent.slice(0, index) 
                                + textField.textContent.slice(index + 1);
        return;
    }
    textField.textContent += ".";
});

document.getElementById("division").addEventListener("click", function(){
    const textField = document.querySelector("#result");
    textField.textContent += "÷";
    expression += "/";
});

document.getElementById("multiply").addEventListener("click", function(){
    const textField = document.querySelector("#result");
    textField.textContent += "×";
    expression += "*";
});

document.getElementById("subtract").addEventListener("click", function(){
    const textField = document.querySelector("#result");
    textField.textContent += "-";
    expression += "-";
});

document.getElementById("plus").addEventListener("click", function(){
    const textField = document.querySelector("#result");
    textField.textContent += "+";
    expression += "+";
});

document.getElementById("equal").addEventListener("click", function(){
    const textField = document.querySelector("#result");

    if(!textField.textContent[textField.textContent.length-1].match(/^[0-9a-z]+$/)){
        alert("Invalid expression, please add another value");
        return;
    }

    textField.textContent = eval(expression);
});