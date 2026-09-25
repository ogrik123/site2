//1
//function random() {
//alert(Math.round(Math.random() * 10))
//}
//document.getElementById("random").onclick = random;
//alert(Math.round(4.49858))
//alert(Math.max(-100,-22,-20,-21,-1000))
//alert(Math.round(Math.random()*1000))
//let text = prompt("Введи что угодно:")
//text=text.trim().toUpperCase()
//
//document.querySelector('body').innerHTML += `<h1>${text}</h1>`
//const string = prompt("введи число 0-3")
//switch(string){
//case "0":
//alert("вы ввели число 0")
//break
//case "1":
//alert("вы ввели число 1")
//break
//case "2":
//alert("вы ввели число 2")
//break
//}
//const user = prompt(":")
//switch(user){
//case "привет":
//alert("и тебе привет")
//break
//case "пока":
//alert("и тебе пока")
//break
//default:
//alert("я не понял")
//break
//}
//let i = 5
//while(i>0){
//console.log(0)
//i--
//}
//let i = 0
//while(i != 11){
//console.log(i)
//i++
//}
//for(let i = 0;i < 3; i++){
//console.log(i)
//}
//for(let i = 0;i<35;i++) {
//if (i%2===0) {
//console.log(i)
//}
//}
//for(let i = 1;i<51;i++) {
//console.log(i)
//}
let userpass;
userpass = prompt("введите пароль:");
atempts = 3
while(userpass != "1234" && atempts != 0) {
alert("неверный пароль")
alert(`осталось попыток ${atempts}`)
atempts--
userpass = prompt("введите пароль:");
if (atempts == 0){
alert("не осталось попыток")
break
}
}
if(atempts > 0){
alert("пароль верный")
}
