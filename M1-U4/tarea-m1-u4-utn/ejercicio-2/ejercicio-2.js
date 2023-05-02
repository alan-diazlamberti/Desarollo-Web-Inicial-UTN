// Ejercicio 2

// Haciendo uso de los bucles, recorrer un array de números y determinar cual es el mayor

let numeros = [3, 6, 9, 12, 15, 12, 9, 6, 3]

let numeroMayor = numeros[0]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > numeroMayor){
        numeroMayor = numeros[i]
    }
}

console.log("Recorremos el array de números:", numeros)
console.log("El número mayor es:", numeroMayor)
document.write("Recorremos el array de números:" + " " + numeros + "<br>")
document.write("El número mayor es:" + " " + numeroMayor)
