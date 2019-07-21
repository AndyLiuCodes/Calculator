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
        return;
    }

    if(textField.textContent.length > 10){
        alert("Exceeded max number of digits");
        return;
    }

    textField.textContent += String(number);
}

let value1 = 0;
let value2 = 0;
let operator = "";

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
        
        return;
    }

    textField.textContent += ".";
});

document.getElementById("division").addEventListener("click", function(){

});

document.getElementById("multiply").addEventListener("click", function(){

});

document.getElementById("subtract").addEventListener("click", function(){

});

document.getElementById("plus").addEventListener("click", function(){

});

document.getElementById("equal").addEventListener("click", function(){

});