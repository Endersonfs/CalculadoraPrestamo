// variables de  los porcentajes

function calcular()
{
// varibles necesarias
var montoprestamos=0;
var tiempomes =0;
var resultado=0;
montoprestamos = document.getElementById("montoprestamos").value;
tiempomes = document.getElementById("tiempomes").value; 
//validacion 
if(montoprestamos>=1000 &&  montoprestamos < 20000)
{
    resultado = montoprestamos * 0.12;
    alert("Cantidad a un 12% : "+resultado);
    montoprestamos =0;

}else if(montoprestamos >=21000 && montoprestamos < 40000){
    resultado = montoprestamos * 0.10;
    alert("Cantidad a un 10% : "+resultado);
    montoprestamos =0;
}
else if(montoprestamos >=41000 && montoprestamos < 80000){
    resultado = montoprestamos * 0.8;
    alert("Cantidad a un 8% : "+resultado);
    montoprestamos =0;
}
else if(montoprestamos >=81000 && montoprestamos < 120000){
    resultado = montoprestamos * 0.7;
    alert("Cantidad a un 7% : "+resultado);
    montoprestamos =0;
}
else if(montoprestamos >=121000 && montoprestamos < 160000){
    resultado = montoprestamos * 0.6;
    alert("Cantidad a un 6% : "+resultado);
    montoprestamos =0;
}
else if(montoprestamos >=161000 && montoprestamos < 200000){
    resultado = montoprestamos * 0.605;
    alert("Cantidad a un 6.5% : "+resultado);
    montoprestamos =0;
}
else if(montoprestamos >201000 && montoprestamos <250000){
    resultado = montoprestamos * 0.5;
    alert("Cantidad a un 5% : "+resultado);
    montoprestamos =0;
}
else if(montoprestamos >=251000){
    resultado = montoprestamos * 0.5050;
    alert("Cantidad a un 5.50% : "+resultado);
    montoprestamos =0;
}
else {
    alert("Esta fuera del rango");
}        
// mostrando resultado
resultado = document.getElementById("compuesto");
resultado.innerHTML =  parseInt(resultado);       
}