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
nombrePaciente.innerHTML="Bienvenido " + "<span>"+user+"</span>"
valor.innerHTML=valorEntero
valor1.innerHTML=valorEntero1
valor2.innerHTML=valorEntero2
}
