
//Suma varios ingresos
const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
//Resta varios ingresos
const restar = (...args) => {
    return args.reduce((a, b) => a - b, 0);
};

//Divide dos valores
const dividir = (a, b) => a / b;

//multiplica dos valores
const multiplicar = (a, b) => a * b;


function guardarEnstorage(encontrado) {
    return localStorage.setItem('cart', JSON.stringify(encontrado))
}

function MayorDeTodos(n1, n2, n3) {
    if (n1 > n2 && n1 >= n3) {
        return n1;
    } else if (n2 > n1 && n2 >= n3) {
        return n2;
    } else {
        return n3
    }
}

function arrPrecios(arr) {
    const arrPrecios = [];
    for (let i = 0; i < arr.length; i++) {
        arrPrecios.push(parseInt(arr[i].precio))
    }
    return arrPrecios;
}

function sumarPrecio(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = arr[i].precio + suma
    }
    return suma;
}


//Busca un funko dentro de un array
function filtradoFunko(arr, filtro) {
    let filtrado = arr.find((el) => {
        return el.modelo.includes(filtro);
    });
    return filtrado;
} 





