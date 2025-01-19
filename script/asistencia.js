

let fecha= new Date("11/08/2025")
console.log(fecha)

let  msFecha= fecha.getTime()

let tiempodias=document.querySelector(`#dias`)
let tiempohoras=document.querySelector(`#horas`)
let tiempominutos=document.querySelector(`#minutos`)
let cuentaatras= document.querySelector(`#cuentaatras`)

let Intervalo = setInterval(()=>{

  let hoy = new Date ().getTime()
  let resto = msFecha - hoy; 
  let msPorDia= 1000 * 60 * 60 * 24;
  let msPorHora= 1000 * 60 * 60;
  let msPorMinuto= 1000 * 60;


  let dias = Math.floor(resto / msPorDia); 
  let horas= Math.floor((resto % msPorDia)/msPorHora);
  let minutos= Math.floor((resto % msPorDia)/msPorMinuto)

  tiempodias.innerText = dias;
  tiempohoras.innerText = horas < 10? "0" + horas:horas;
  tiempominutos.innerText = minutos < 10? "0" + minutos:minutos;


  if (resto < 0){
      clearInterval (Intervalo);
      cuentaatras.innerHTML = "<p class = `llego`> Es hoy! </p>"
  }
}, 1000)