
var inputCantidad = document.getElementById("cantidad");
var selectMonedaDe = document.getElementById("monedaDe");
var selectMonedaA = document.getElementById("monedaA");

// valor de todas las monedas
// 1libra = 1.24 dolar
let libradolar = 1.2488693;
// 1e = 0.87 libras
let eurolibra = 0.87074637;
// 1e = 1.09 dolar
let eurodolar = 1.08750;


function convertir(){
let cantidad = inputCantidad.value;
let monedaDe = selectMonedaDe.value;
let monedaA = selectMonedaA.value;    
let resultado = 0;
if(monedaDe=="euro"){
    switch(monedaA){
        case'euro':
        resultado = cantidad; 
        break;
        case'libra':
        resultado = cantidad * eurolibra;
        break;
        case'dolar':
        resultado = cantidad * eurodolar;
        break;
        default:
            return;
    } 
}
else if(monedaDe=="libra"){
    switch(monedaA){
        case'euro':
        resultado = cantidad / eurolibra; 
        break;
        case'libra':
        resultado = cantidad;
        break;
        case'dolar':
        resultado = cantidad * libradolar;
        break;
        default:
            return;
    } 
}

else if(monedaDe=="dolar"){
    switch(monedaA){
        case'euro':
        resultado = cantidad / eurodolar; 
        break;
        case'libra':
        resultado = cantidad / libradolar;
        break;
        case'dolar':
        resultado = cantidad;
        break;
        default:
            return;
    } 
}
else {
    resultado = "error seleccione una moneda valida";
}
//poner resultado con 2 decimales
resultado = resultado.toFixed(2);
document.getElementById("resultado").innerHTML = resultado;
}