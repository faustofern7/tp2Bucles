let nota;

do{
    nota = parseInt(prompt("Ingresar una nota entre 0 y 10: "));

    if(nota>=0 && nota<=10){

        if(nota>=0 && nota<=2){
            alert("Calificación: Muy deficiente");
        }
        if(nota>=3 && nota<=4){
            alert("Calificación: Insuficiente");
        }
        if(nota>=5 && nota<=6){
            alert("Calificación: Suficiente");
        }
        if(nota==7){
            alert("Calificación: Bien");
        }
        if(nota>=8 && nota<=9){
            alert("Calificación: Notable");
        }
        if(nota==10){
            alert("Calificación: Sobresaliente");
        }
        
    }
    else{
        alert("La nota ingresada no es valida, introduce una entre 0 y 10");
    }

}while(confirm("Desea ingresar otra nota?")); 



