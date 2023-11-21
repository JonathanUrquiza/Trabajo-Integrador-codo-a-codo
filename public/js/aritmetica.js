export const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
export const restar = (...args) => {
    return args.reduce((a, b) => a - b, 0);
};
export const dividir = (a, b) => a / b;

export const multiplicar = (a, b) => a * b;

export function sumarPrecio(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = arr[i].precio + suma
    }
    return suma;
}

export function arrPrecios(arr) {
    const arrPrecios = [];
    for (let i = 0; i < arr.length; i++) {
        arrPrecios.push(parseInt(arr[i].precio))
    } 
    return arrPrecios;
}

export function MayorDeTodos(n1, n2, n3) {
    if (n1 > n2 && n1 >= n3) {
        return n1;
    } else if (n2 > n1 && n2 >= n3) {
        return n2;
    } else {
        return n3
    }
}

export function guardarEnstorage(encontrado) {
    return localStorage.setItem('cart', JSON.stringify(encontrado))
}


//numero primo
/* let esPrimo = true;
let numero = parent(prompt('Ingrese un número'))
for (let i = 0; i < numero; i++) {
    if (numero % i === 0) {
        console.log("Ademas es divisible por 1 y por si mismo. divide por " + i);
        esPrimo = false;
    }
}
if (esPrimo) {
    console.log("es primo");
} else {
    console.log("No es primo");
} */