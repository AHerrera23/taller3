console.log('lets fucking goo!')
let error = document.getElementById("error")
let card = document.getElementById("card")
let cardPaciente=document.getElementById("cardPaciente")
let nombrePaciente=document.getElementById("paciente")
let dosis=document.getElementById('dosis')
let monoxido=document.getElementById('monoxido')
let saturacion=document.getElementById('saturacion')
let valor
let valor2
let valor3

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const test = ()=>{
let user = document.getElementById("nombreUsuario").value
console.log(user)
console.log(typeof user)
card.style.display="none"
cardPaciente.style.display="flex"
nombrePaciente.innerHTML="Buenas tardes:" + " <span>"+user+"</span> <br>¿Como te sentis el dia de hoy?"
dosis.innerHTML='Porcentaje de dosis: <br> En sangre: ' +' <span class="amarillo">'+randomInt(0,5)+'%</span>' +'<br>'+'En dispositivo: ' +' <span class="amarillo">'+randomInt(98,100)+'%</span>'
monoxido.innerHTML='Porcentaje de monoxido en sangre: ' + '<span>'+randomInt(70,90)+'%</span>'
saturacion.innerHTML='Porcentaje de saturacion de oxigeno en sangre: ' + '<span>'+randomInt(40,80)+'%</span>'

}
