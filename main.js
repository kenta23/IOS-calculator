const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".display-num");
const clear = document.querySelector(".clear")
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const operations = document.querySelectorAll(".operations")
const equals = document.querySelector(".equals")
const point = document.querySelector(".point")

let isFirstvalue = false;
let firstValue = "";
let isSecondValue = false;
let secondValue = ""
let sign = "";
let resultValue = 0;


for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value')  //to get the value attribute on the buttons and display
        if(isFirstvalue === false) {
            getFirstValue(atr);
        }
        if(isSecondValue === false) {
            getSecondValue(atr);
        }
    })
}
function getFirstValue(value) {
    result.textContent = ""
    firstValue += value
    result.textContent = firstValue
    firstValue = +firstValue

}

function getSecondValue(value) {
    if(firstValue != "" && sign != "") {
        secondValue += value;
        result.textContent = secondValue
        secondValue = +secondValue
    }
}
function getSign () {
    for(let i = 0; i < operations.length; i++) {
         operations[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value')
            isFirstvalue = true;
         })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.textContent = ""
    switch(sign) {
        case "+":
            resultValue = firstValue + secondValue
            break;
        case "-":
            resultValue = firstValue - secondValue
            break;
        case "X":
            resultValue = firstValue * secondValue
            break;
        case "÷":
            resultValue = firstValue / secondValue
                break;      
    }         
    result.innerHTML = resultValue
    firstValue = resultValue
    secondValue = ""

    resultLength()

})

function resultLength() {
    resultValue = JSON.stringify(resultValue)

    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue)
        result.textContent = resultValue.toFixed(2)
    }
    }
    

negative.addEventListener('click', () => {
    result.textContent = ""
   if(firstValue != "") {
    resultValue = -firstValue
    firstValue = resultValue
   }
   if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue
   }

    result.textContent = resultValue
})
percent.addEventListener('click', () => {
    result.textContent = ""
    if(firstValue != "") {
     resultValue = firstValue
     firstValue = resultValue / 10
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
         resultValue = resultValue / 10
    }
 
     result.textContent = resultValue
})
point.addEventListener('click', (e) => {
    let point = e.target.getAttribute("value")
   
     resultValue = firstValue + point
     firstValue = resultValue
     resultValue = second + point
     secondValue = resultValue

     result.textContent += resultValue
})
clear.addEventListener('click', () => {   
         isFirstvalue = false;
         firstValue = "";
         isSecondValue = false;
         secondValue = ""
         sign = "";
         resultValue = 0;
       

       result.textContent = resultValue
})
    
/*
}*/