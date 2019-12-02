// variables de  los porcentajes

function calcular()
{
// varibles necesarias
var montoprestamos=0;
var tiempomes =0;
var resultado=0;
montoprestamos = document.getElementById("montoprestamos").value;
tiempomes = document.getElementById("tiempomes").value;
if(tiempomes ==="" || montoprestamos==="")
{
    alert("Debes llenar todos los campos");
}else
{    
//validacion 
if(montoprestamos>=1000 &&  montoprestamos < 5999)
{
    resultado = montoprestamos * 0.15;
    alert("Cantidad a un 15% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;

}else if(montoprestamos >=5000 && montoprestamos < 11999){
    resultado = montoprestamos * 0.13;
    alert("Cantidad a un 13% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;
}
else if(montoprestamos >=12000 && montoprestamos < 20999){
    resultado = montoprestamos * 0.12;
    alert("Cantidad a un 12% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;
}
else if(montoprestamos >=21000 && montoprestamos < 40999){
    resultado = montoprestamos * 0.10;
    alert("Cantidad a un 10% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;
}
else if(montoprestamos >=41000 && montoprestamos < 90999){
    resultado = montoprestamos * 0.8;
    alert("Cantidad a un 8% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;
}
else if(montoprestamos >=91000 && montoprestamos < 160999){
    resultado = montoprestamos * 0.7;
    alert("Cantidad a un 7% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;
}
else if(montoprestamos >=161999){
    resultado = montoprestamos * 0.6;
    alert("Cantidad a un 6% y el precio a pagar mensual es: :"+((parseFloat(resultado)+parseFloat(montoprestamos))/tiempomes));
    montoprestamos =0;
}
else {
    alert("Esta fuera del rango");
}

}        
// mostrando resultado
resultado = document.getElementById("compuesto");
resultado.innerHTML =  parseInt(resultado);       
}