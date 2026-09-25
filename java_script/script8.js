const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const value = document.getElementById("value")
const price = document.querySelector(".price")
const size = document.querySelector(".size")
let cost = 1500

function increment(){
let result = Number(value.textContent) + 1
value.textContent = result
price.textContent = Number(value.textContent) * cost + "$"
}
function decrement(){
if (Number(value.textContent) > 1){
let result = Number(value.textContent) - 1
value.textContent = result
price.textContent = Number(value.textContent) * cost + "$"
}
}
plus.onclick = increment
minus.onclick = decrement

size.addEventListener("click",function(event){
    let clickTarget = event.target;
    let currentActive = document.querySelector(".active")
    if (clickTarget.classList.contains("medium")){
        cost = 1500
        price.textContent = Number(value.textContent) * cost + "$"
        clickTarget.classList.add("active")
        currentActive.classList.remove("active")
    }else if (clickTarget.classList.contains("large")){
        cost = 1700
        price.textContent = Number(value.textContent) * cost + "$"
        clickTarget.classList.add("active")
        currentActive.classList.remove("active")
    }
})



const plus2 = document.getElementById("plus2")
const minus2 = document.getElementById("minus2")
const value2 = document.getElementById("value2")
const price2 = document.querySelector(".price2")
const size2 = document.querySelector(".size2")
let cost2 = 1800

function increment2(){
let result2 = Number(value2.textContent) + 1
value2.textContent = result2
price2.textContent = Number(value2.textContent) * cost2 + "$"
}
function decrement2(){
if (Number(value2.textContent) > 1){
let result2 = Number(value2.textContent) - 1
value2.textContent = result2
price2.textContent = Number(value2.textContent) * cost2 + "$"
}}

plus2.onclick = increment2
minus2.onclick = decrement2


size2.addEventListener("click",function(event){
    let clickTarget2 = event.target;
    let currentActive2 = document.querySelector(".active2")
    if (clickTarget2.classList.contains("medium2")){
        cost2 = 1800
        price2.textContent = Number(value2.textContent) * cost2 + "$"
        clickTarget2.classList.add("active2")
        currentActive2.classList.remove("active2")
    }else if (clickTarget2.classList.contains("large2")){
        cost2 = 1900
        price2.textContent = Number(value2.textContent) * cost2 + "$"
        clickTarget2.classList.add("active2")
        currentActive2.classList.remove("active2")
    }
})