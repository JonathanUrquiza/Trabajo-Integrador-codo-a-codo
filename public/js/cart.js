import {  crearCart } from "./crearhtml.js";
import { sumarPrecio } from "./aritmetica.js";
//Este modulo esta listo para presentar, no hay que corregir nada, por el momento
document.title = "Cart | Funkoshop";//Asigna un título al HTML de forma dinámica

const bandeja = document.getElementById('bandeja');//trae el SECTION con el id="bandeja".

//Lista de elemento que traigo del HTML para asignarles valores distintos después.
const tagArray = document.getElementsByTagName('span'), promo = document.getElementById('promoCode'), total = document.getElementById('totalDolares'),
cantObj = document.getElementById('cantObj');


const carrito = localStorage.getItem('cart');//Trae del localStorage en forma de string el array de objetos que fueron enviados desde el shop
let seleccionados = JSON.parse(carrito);//Convierte en objetos el string de la variable carrito.



let disc = tagArray[4].innerText;//Valor de descuento a aplciar desde JS.

let promoCode = promo.innerText;//Codigo que activa el descuento.

console.log(disc);
console.log(promoCode);

//Evalua si el array esta vacio para inserta en el HTML los datos recibidos desde el localStorages
if (seleccionados.length >= 0) {
  cantObj.innerText = "0";  //Define la cantidad de objetos que hay en el array 'seleccionados'
  setTimeout(() => {
    cantObj.innerText = seleccionados.length;
  }, 1000);
  setTimeout(() => {
    bandeja.innerHTML = "<H1>Cargando.</H1>";
    setTimeout(() => {
      bandeja.innerHTML = "<H1>Cargando..</H1>";
      setTimeout(() => {
        bandeja.innerHTML = "<H1>Cargando...</H1>";
        setTimeout(() => {
          bandeja.innerHTML = "";
          crearCart(seleccionados)
          total.innerText = "$" + sumarPrecio(seleccionados);
          
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
} else {
cantObj.innerText = "0";
bandeja.innerHTML = "<h1>No hay ningún Funko selecionado</h1>"
}





/* for (let index = 0; index < FunkosMatriz.length; index++) {
  let fila = FunkosMatriz[index];    
  for (let x = 0; x < fila.length; x++) {
    console.log(fila[x]);
  }
} */


//Una vez que se realiza el checkout, se aplica el localStorage.removeItem('cart'); o localStorage.clear();



//Items de la lista


    
  



//contador en resta
/* for (let index = 10; index > -1; index--) {
  console.log("______________________________________________________");
  console.log(index + " objetos");
}
 
function filtradoFunko(filtro) {
  let filtrado = starwars.filter((el) => {
    return el.modelo.includes(filtro);
  });
  return filtrado;
}
console.log(filtradoFunko("Baby yoda blueball"));
 */