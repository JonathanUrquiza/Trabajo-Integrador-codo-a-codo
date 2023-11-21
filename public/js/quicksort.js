//Algoritmo de ordenamiento quicksort

export function quicksort(datos) {
    
    if (datos.length <= 1) {
        return datos
    }

    let left = [], rigth = [], aux = [], pivot = datos.pop(), n = datos.length;

    for (let i = 0; i < n; i++) {
        if (datos[i] <= pivot) {
            left.push(datos[i]);
        } else {
            rigth.push(datos[i]);
        }
    }
    return aux.concat(quicksort(left), pivot, quicksort(rigth));
}
let primos = [19, 13, 2, 11, 7, 5, 23, 17];
        
console.log(primos);

let resultado = quicksort(primos);

console.log(resultado);[2, 5, 7, 11, 13, 17, 19, 23]