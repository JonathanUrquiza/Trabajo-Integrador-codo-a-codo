/* 
function sumar(a, b) {
    let suma = a + b;
    console.log("El resultado de la suma de " + a + " y " + b + " es: " + suma);
}
let a = 4;
let b = 5;
sumar(a, b)
function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("estoy", "aprendiendo", "a programar")
*/

//retornando valores

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
//console.log(resultado);

/* Proximo en la fila

En informárica una cola (queue) es una estructutra de datos abstracta en la 
cual los elementos se mantiene en orden. Los nuevos elementos se pueden 
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

definir una funcion proximoEnLaFila que tome un arreglo (arreglo) y un numero (elemento) como argumento.
agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo.
 La funcion proximaEnLaFila deberetornar el elemento que fue removido.
*/

function proximoEnLaFila(arr, elem) {
    arr.push(elem);   //Agrega al final de arr.
    return arr.shift();       //Elimina el primer elemento.
}
const miArr = [1, 2, 3, 4, 5]

/* 
console.log("antes: " + JSON.stringify(miArr));//Muestra el arr origina.

console.log(proximoEnLaFila(miArr, 6));//muesta el elemento eliminado.

console.log("Despues: " + JSON.stringify(miArr));//muestra el arr acutalizado.
 */
function ClasificarValores(valor) {
    if (valor < 5) {
        console.log("Menor que 5.");
    } else if (valor < 10) {
        console.log("Menor que 10.");
    } else {
        console.log("Mayor o igual a 10.");
    }
}
//ClasificarValores(10);

function InterpretarIMC(IMC) {
    if (IMC < 18.5) {
        console.log("Bajo de peso");
    } else if (IMC <= 24.9) {
        console.log("Normal");
    } else if (IMC <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obeso");
    }
}

/* InterpretarIMC(34); */


/* 
En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes
que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan por encima o por debajo 
del par estén tus golpes.
 Tu función tomara los argumentos para y golpes.

 retorna la cadena correcta según esta tabla que muestra los golpes en orden mayor a menor prioridad:
 
Golpes                 Retornar
-------------------------------
1               "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "par" 
par + 1         "bogey"
par + 2         "Doble bogey"
>= par + 3      "Go Home!"

*/
function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
        return "Hole-in-one!"
    } else if (golpes <= par - 2) {
        return console.log("eagle");
    } else if (golpes == par - 1) {
        return console.log();
    } else if (golpes == par) {
        return console.log("par");
    } else if (golpes == par + 1) {
        return console.log("bogey");
    } else if (golpes == par + 2) {
        return console.log("Doble bogey");
    } else if (golpes <= par + 3) {
        return console.log("Go Home!");
    }
}

/* 
puntajeDeGolf(4, 7);
 */


function buscarElementoQuimico(simbolo) {
    let simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    return simbolosQuimicos[simbolo]
}
/* 
console.log(buscarElementoQuimico("Al"));
 */

const micuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
}
function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esa propiedad"
    }
}


/*
console.log(verificarPropiedad(micuaderno, "categoria"));
console.log(verificarPropiedad(micuaderno, "tamaño"));
console.log(micuaderno.hasOwnProperty("color"));
 */
const ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "Individual",
        "precio": 5.67,
        "topping": [
            "Extra queso",
            "Champiñones",
            "piña"
        ],
        "prarLevar": true
    },
    {
        "tipo": "Cuatr queso",
        "tamaño": "Familiar",
        "precio": 18.34,
        "topping": [
            "Extra queso",
            "Pimentón",
        ],
        "prarLevar": false
    },
    {
        "tipo": "Napolitana",
        "Tamaño": "Individual",
        "precio": 6.78,
        "Topping": [],
        "paraLlevar": true,
    }
];

/* 
console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);
console.log(ordenesDePizzas[0]["topping"][0]);
console.log(ordenesDePizzas[1]);
 */

//Anidación de objetos
const miReceta = {
    "descripcion": "Mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharaditas",
            "mantequilla": "200 grs"
        }
    }
};
/* 
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);
console.log(miReceta["ingredientes"]["masa"]["harina"]);//El último valor podemos personalizarlo con una variable
console.log(miReceta["ingredientes"]["masa"]["sal"]);//El último valor podemos personalizarlo con una variable
console.log(miReceta["ingredientes"]["masa"]["agua"]);//El último valor podemos personalizarlo con una variable
console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
 */

//Array anidados
const misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
             "pino",
             "abedul"
        ]
    }
]
/* 
let primeraFlor = misPlantas[0].lista[0];
let segundaFlor = misPlantas[0].lista[1];
let TerceraFlor = misPlantas[0].lista[2];
console.log(primeraFlor, segundaFlor, TerceraFlor);

let primerArbol = misPlantas[1].lista[0];
let segundoArbol = misPlantas[1].lista[1];
let tercerArbol = misPlantas[1].lista[2];
console.log(primerArbol ,segundoArbol, tercerArbol);
 */


const coleccionDeDiscos = {
    7853: {
        tituloDeAlbum : "bee Gees Greatest",
        artista : "Bee Gees",
        canciones : ["Stayin Alive"]
    },
    5439: {
        tituloDeAlbum: "ABBA Gold"
    }
}


/* 
Define una función actualizarDoscis que tome los siguientes parámetos:
- dicso (el obj que representa la coleccion de discos)
-id
-propiedad ("artista" o "canciones")
-valor

Tu meta es completar la funcion implementando las siguinetes reglas para 
modificar el objeto pasado a la funcion.

-si "valor" es una cadena vacia, elimina la propiedad del album correspondiente.

-si "propiedad" es igual a la cadena de caracteres "canciones" pero el album 
no tiene una propiedad "canciones", crea una arr vacio y agrega "valor" a ese arr.

-si "valor" no es una cadena vacia y "propieda" no es igual a "canciones", asigna el valor del parametro "valor" 
a la propiedad.
si la propiedad no existe, debes crearla y asignar este valor
*/

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === "canciones" ) {
        discos[id][propiedad] =discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

/* 
console.log(coleccionDeDiscos[5439].artista);//la propiedad estavacia
console.log(coleccionDeDiscos[7853].tituloDeAlbum);//la propiedad esta definida.

actualizarDiscos(coleccionDeDiscos, 7853, "tituloDeAlbum", "");
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA")

console.log(coleccionDeDiscos[7853].tituloDeAlbum);//la propiedad fue eliminada.
console.log(coleccionDeDiscos[5439].artista);//la propiedad fue definida y le asignaron un valor.
 */
/* 
let i = 0;
const miArray = [];


while (i <= 25) {
    miArray.push(i)
    i++;
}
    //console.log(miArray);
 

let numeros = [1, 2, 3, 4, 5, 6, 8, 9, 34]

while (numeros.length > 4) {
    numeros.pop();
}
//console.log(numeros);

let miArray2 = [];

for (let i = 1; i < 20; i+= 2) {
    console.log(i);
    miArray2.push(i)
    console.log(miArray2);
}
console.log(miArray2);


const multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (let i = 0; i < multiArr.length; i++) {
    console.log(">nueva iteración");
    let arrAnidadio = multiArr[i];//recorre el array de arrays
    console.log("arreglo:" + arrAnidadio);

    for (let j = 0; j < arrAnidadio.length; j++) {
        console.log(">>>Ciclo anidado");
        console.log("Elemento: " + arrAnidadio[j]);
        console.log(arrAnidadio[j]);//ercorre cada array del array anterior   
    } 
}
*/
