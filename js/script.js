
        // variables de  los porcentajes

        function calcular()
        {
        // varibles necesarias
        var montoprestamos=0;
        var tiempomes =0;
        var resultado=0;
        var porcientoaplica =0;
        var cuentomensual =0;
        
        montoprestamos = document.getElementById("montoprestamos").value;
        tiempomes = document.getElementById("tiempomes").value;
        //validando los campos
        if(montoprestamos==="")
        {
            alert("Complete el campo de monto a solicitar");
            document.getElementById("montoprestamos").focus();
            asignarValorTextoVacio();
        }else if (tiempomes ==="")
        {
            alert("Complete el campo de los mes a solicitar");
            document.getElementById("tiempomes").focus();
            asignarValorTextoVacio();    
        }else{   
        //validacion 
        if(montoprestamos>=1000 &&  montoprestamos < 5999)
        {
            resultado = montoprestamos * 0.15;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =15;
        
        }else if(montoprestamos >=5000 && montoprestamos < 11999){
            resultado = montoprestamos * 0.13;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =13;
        }
        else if(montoprestamos >=12000 && montoprestamos < 20999){
            resultado = montoprestamos * 0.12;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =12;
        }
        else if(montoprestamos >=21000 && montoprestamos < 40999){
            resultado = montoprestamos * 0.10;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =10;    
        }
        else if(montoprestamos >=41000 && montoprestamos < 90999){
            resultado = montoprestamos * 0.8;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =8;
        }
        else if(montoprestamos >=91000 && montoprestamos < 160999){
            resultado = montoprestamos * 0.7;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =7;
        }
        else if(montoprestamos >=161999){
            resultado = montoprestamos * 0.6;
            cuentamensual =resultado+(montoprestamos/tiempomes);
            porcientoaplica =6;
        }
        else {
            alert("Esta fuera del rango");     
           
        }
        
        }        
        
        // mostrando resultado
        document.getElementById("cuotamensual").innerHTML = cuentamensual+".00";
        document.getElementById("tiempo").innerHTML = tiempomes +" meses";
        document.getElementById("porcientoapli").innerHTML = porcientoaplica+"%";
        
        }
        function asignarValorTextoVacio()
        {
            document.getElementById("cuotamensual").innerHTML = 0+".00";
            document.getElementById("tiempomes").innerHTML =0+ " meses";
            document.getElementById("porcientoapli").innerHTML =0+"%";
        }
            