import { crearHtml } from "./crearhtml.js";
import { filtradoFunko } from "./filtro.js";
import { infoFunkos } from "./funkos.js"
import { crearCard } from "./crearhtml.js";


document.title = "Shop | Funkoshop";
//Data Dibision
  //Working storage
const bandeja = document.getElementById('bandeja');
const btnBuscar = document.getElementById('btnBuscar');
const next = document.getElementById('next');
const back = document.getElementById('next');
const input = document.querySelectorAll('input[type = "text"]');
const form = document.getElementById('myForm');
const cart = [];



function guardarEnstorage(encontrado) {
  return localStorage.setItem('cart', JSON.stringify(encontrado))
}

function guaradarElemento(elemento) {
  return cart.push(elemento)
}     




/* function funko(id, serie, modelo, descripcion, precio, img) {
  this.id = id;
  this.serie = serie;
  this.modelo = modelo;
  this.descripcion = descripcion;
  this.precio = precio;
  
  if (this.img === undefined) {
    this.img = "No loading"
  } else {
    this.img = img;
  }
};
 */

/* const pedirFunkos = ()=>{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(crearHtml(infoFunkos))
    }, 1000);
  })
}

pedirFunkos().then((response)=>{
  cart = response
  crearHtml(cart)          
}).catch((error) => {

}) */






btnVer.addEventListener('click', (e)=>{
  e.preventDefault();
  setTimeout(() => {
    bandeja.innerHTML = "<H1>Cargando.</H1>";
    setTimeout(() => {
      bandeja.innerHTML = "<H1>Cargando..</H1>";
      setTimeout(() => {
        bandeja.innerHTML = "<H1>Cargando...</H1>";
        setTimeout(() => {
          bandeja.innerHTML = "";
          crearHtml(infoFunkos);
        }, 1000);  
      }, 1000);
    }, 1000);
  }, 1000);
})

btnBuscar.addEventListener('click', (e)=>{
  e.preventDefault();
  let buscar = input[0].value;
  setTimeout(() => {
    bandeja.innerHTML = "";
    const encontrado = filtradoFunko(infoFunkos, buscar);
    crearCard(encontrado);
    /*  
    guaradarElemento(encontrado);
    guardarEnstorage(cart)
    */
  }, 2000);
});

/* function buscarParametro(params) {
    const formData = new FormData(form);
    const parametro = formData.get('parametro');
    return console.log(parametro);
}
buscarParametro()


 */

    
/*     
    
function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total += i
  }
  return total
}
console.log(sumarRango(1,10));


const duplicado = [];
function porCadaUno(arr,fn) {
  for (const elemento of arr) {
    fn(elemento)
  }
}
porCadaUno (infoFunkos, (elemento) => {
  duplicado.push(elemento)
})

console.log(duplicado);

//Lo mismo que arrayPrecios
infoFunkos.forEach((el)=>{
  console.log(el.precio);
})

const buscarModelo = infoFunkos.find((el) => {
  return el.modelo === "Charmander"
})
console.log(buscarModelo); 

//crea un array nuevo con lo filtrado
let filtrado = infoFunkos.filter( el => {
  return el.precio > 4000
})
console.log(filtrado);

//Si existe devuelte true o false
const existe = infoFunkos.some ( el=> {
  return el.modelo = "Charmander" 
})
console.log(existe);

//crea un nuevo arra con los elementos solicitados
const descuento = infoFunkos.map ( el => {
  return el.precio / 1.20
})
console.log(descuento);

const precioActualizado = infoFunkos.map (el => {
  return {
    id: el.id,
    serie: el.serie,
    modelo: el.modelo,
    descripcion:el.descripcion,
    precio: el.precio * 1.25
  }
})

console.log(precioActualizado);

let capital = infoFunkos.reduce((acc, el) => {
  return acc + el.precio;
},0)
console.log(capital);
let capitalActualizado = precioActualizado.reduce((acc, el) => {
  return acc + el.precio
},0)
console.log(capitalActualizado);


//ordenamiento

//primero una copia del array
const funkoCopia = infoFunkos.map (el => {
  return {
    id: el.id,
    serie: el.serie,
    modelo: el.modelo,
    descripcion:el.descripcion,
    precio: el.precio * 1.25
  }
})
console.log(funkoCopia);
*/
//modifico el array
//pokemonCopia.sort((a, b)=>  a - b )
//mayor a menor
//pokemonCopia.sort((a, b)=>  b - a )
//console.log(pokemonCopia);
/* 
for (const lista of orden) {
  console.log(lista.innerHTML);
}
const encontrado = pokemon.find((el) => {
  return el.modelo.includes(filtro)
});

 */
