const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".display-num");
const clear = document.querySelector(".clear")
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const operations = document.querySelectorAll(".operations")
const equals = document.querySelector(".equals")
const point = document.querySelector(".point")


for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value')

        
        result.textContent += atr
        
        
    })
}

equals.addEventListener('click', (e) => {

    if(result.value = '') {
        result.value = ""
    }
    else {
        let answer = eval(result.value)
        result.textContent = answer
    }
}) 
   
