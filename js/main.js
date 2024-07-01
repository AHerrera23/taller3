console.log('lets fucking goo!')
let error = document.getElementById("error");
let card = document.getElementById("card");
let cardPaciente=document.getElementById("cardPaciente")
let nombrePaciente=document.getElementById("paciente")
const test = ()=>{
let user = document.getElementById("nombreUsuario").value
console.log(user)
console.log(typeof user)
card.style.display="none"
cardPaciente.style.display="flex"
nombrePaciente.innerHTML="Bienvenido " + "<span>"+user+"</span>"
}
