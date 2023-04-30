// Ejercicio 1

// Utilizando lo aprendido escribir el código necesario para que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avión

let x = prompt("Ingrese la distancia solo en números")

if(x <= 1000){
    y = "a pie."
}

else if(x > 1000 & x <= 10000){
    y = "bicicleta."
}

else if(x > 10000 & x <=30000){
    y = "colectivo."
}

else if(x >30000 & x <= 100000){
    y = "auto."
}

else if(x >100000){
    y = "avión."
}

console.log("El medio apropiado para recorrer", x, "metros es:", y)
document.write("El medio apropiado para recorrer" + " " + x + " " + "metros es:" + " " + y)