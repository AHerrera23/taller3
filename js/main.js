console.log('lets fucking goo!')
let error = document.getElementById("error")
let card = document.getElementById("card")
let cardPaciente=document.getElementById("cardPaciente")
let nombrePaciente=document.getElementById("paciente")
let valor=document.getElementById("valor1")
let valor1=document.getElementById("valor2")
let valor2=document.getElementById("valor3")
let valorEntero
let valorEntero1
let valorEntero2

const randomInt=(max)=>{
    return Math.floor(Math.random()*max)
}
valorEntero=randomInt(50);
valorEntero1=randomInt(50);
valorEntero2=randomInt(50);
const test = ()=>{
let user = document.getElementById("nombreUsuario").value
console.log(user)
console.log(typeof user)
card.style.display="none"
cardPaciente.style.display="flex"
nombrePaciente.innerHTML="Bienvenido a BioFuturo: <br> " + "<span>"+user+"</span>"
valor.innerHTML="% "+valorEntero
if(valorEntero>=0 && valorEntero<=20){
    valor.style.color="green"
}else if(valorEntero>=20 && valorEntero <=40){
    valor.style.color="yellow"
}else if(valorEntero>=40){
    valor.style.color="red"
}
valor1.innerHTML="% "+valorEntero1
if(valorEntero1>=0 && valorEntero1<=20){
    valor1.style.color="green"
}else if(valorEntero1>=20 && valorEntero1 <=40){
    valor1.style.color="yellow"
}else if(valorEntero1>=40){
    valor1.style.color="red"
}
valor2.innerHTML="% "+valorEntero2
if(valorEntero2>=0 && valorEntero2<=20){
    valor2.style.color="green"
}else if(valorEntero2>=20 && valorEntero2 <=40){
    valor2.style.color="yellow"
}else if(valorEntero2>=40){
    valor2.style.color="red"
}
}
