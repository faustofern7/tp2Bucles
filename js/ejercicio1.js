let edad = parseInt(prompt("Ingrese su edad: "));

if(isNaN(edad)){
    document.write("La edad ingresada no es un número válido");
}
else{
    if(edad>=18){
        document.write("<br> ya puede conducir");
    } 
    else{
        document.write("<br> No tiene la edad suficiente para conducir");
    }
}


