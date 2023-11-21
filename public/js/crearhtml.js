

const cart = [];

export function magicCard(obj) {
  let html = "";
  //destructuring
  const { serie, modelo, descripcion, precio, img, id } = obj;
  html =
    `
          <article class="card shadow-lg my-3">
          <picture class="card-img-top">
              <img src="../multimedia/${img}" alt="${descripcion}">
          </picture>
          <div class="card-body text-center">
              <p class="card-text text-bg-danger w-25">NUEVO</p>
              <H3 class="card-title">${modelo}</H3>
              <p class="card-subtitle text-body-secondary">${serie}</p>
              <p class="card-text">${precio}</p>
              <p class="card-text text-info">3 CUOTAS SIN INTERÉS</p>
              <button  id="${id}" type="submit" class="btn btnAdd btn-primary">Agregar al carrito</button>
              </div>
      </article>
            `;
  bandeja.innerHTML += html;
}

function guardarEnstorage(encontrado) {
  return localStorage.setItem('cart', JSON.stringify(encontrado))
}

function guaradarElemento(elemento) {
  return cart.push(elemento)
}   

export function crearHtml(array) {
  for (const item of array) {

    let html = "";
    //destructuring
    const { serie, modelo, descripcion, precio, img, id } = item;
    html =
      `
            <article class="card shadow-lg my-3">
            <picture class="card-img-top">
                <img src="../../multimedia/${img}" alt="${descripcion}">
            </picture>
            <div class="card-body text-center">
                <p class="card-text text-bg-danger w-25">NUEVO</p>
                <H3 class="card-title">${modelo}</H3>
                <p class="card-subtitle text-body-secondary">${serie}</p>
                <p class="card-text">${precio}</p>
                <p class="card-text text-info">3 CUOTAS SIN INTERÉS</p>
                <button  id="${id}" type="submit" class="btn btnAdd btn-primary">Agregar al carrito</button>
                </div>
        </article>
              `;
    bandeja.innerHTML += html;
  }
  
  const arrayBotones = document.querySelectorAll('.btnAdd');
  arrayBotones.forEach((btnAdd) => {
    btnAdd.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Todavia no se");
      let add = seleccionados.find((el) => el.id == btnAdd.id);
      guaradarElemento(add);
     
      
    });
  });
}

export function crearCart(array) {

  for (const itemList of array) {

    let html = "";
    //destructuring
    const { serie, modelo, descripcion, precio, img } = itemList;
    html = `
      <article class="col-sm-12 col-md-12 col-lg-12 bg-light d-flex flex-row align-items-center rounded-5 my-2">
        <picture class="col-sm-1 col-md-2 col-lg-4">
            <img src="../multimedia/${img}" alt="" class="w-100">
            </picture>
        <div class="card-body col-sm-8 col-md-4 col-lg-6">
           <p>${serie}</p>
           <h4 class="card-title">${modelo}</h4>
           <p class="card-subtitle text-truncate">${descripcion}</p>
            <p class="card-text text-primary">${precio}</p>
        </div>
        <div class="btn-group-vertical col-sm-2 col-md-2 col-lg-2">
           <button id="buy" class="btn text-primary">Pagar</button>
          <button id="eliminar" class="btn text-danger">Eliminar</button>
        </div>
      </article>
        `;
    bandeja.innerHTML += html;
  }
  const arrayBotones = document.querySelectorAll(".btnAdd");
  console.log(arrayBotones);
  arrayBotones.forEach((btnAdd) => {
    btnAdd.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Todavia no se");
   
    
    });
  });
}


//Esta función se ejecuta en el shop cuando se busca un funko
export function crearCard(encontrado) {
  let html = "";
    //destructuring
    const { img, serie, modelo, descripcion, precio } = encontrado;
    html = `
      <article class="col-sm-12 col-md-12 col-lg-12 bg-light d-flex flex-row align-items-center rounded-5 my-2">
        <picture class="col-sm-1 col-md-2 col-lg-4">
            <img src="../../multimedia/${img}" alt="" class="w-100">
            </picture>
        <div class="card-body col-sm-8 col-md-4 col-lg-6">
           <p>${serie}</p>
           <h4 class="card-title">${modelo}</h4>
           <p class="card-subtitle text-truncate">${descripcion}</p>
            <p class="card-text text-primary">${precio}</p>
        </div>
        <div class="btn-group-vertical col-sm-2 col-md-2 col-lg-2">
           <button id="agregar" class="btnAdd btn text-primary">Agregar a caarrito</button>
          <button id="eliminar" class="btnDelete btn text-danger">Eliminar</button>
        </div>
      </article>
        `;
    bandeja.innerHTML += html;
    eliminar.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log("estoy eliminando");
      
      
    });

    agregar.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log("estoy agregando al carrito");
      
      guaradarElemento(encontrado);
      console.log(cart);
      guardarEnstorage(cart)
    });
}

export function crearlistCard (encontrado) {
  let html = "";
  const { id, codigo, modelo, serie } = encontrado;
    html = `
    <article class="card w-100 d-flex flex-row justify-content-evenly">
    <p class="fw-bold ident card-header">${id}</p>
    <p class="code card-text">${codigo}</p>
    <p class="name card-text">${modelo}</p>
    <p class="category card-header">${serie}</p>
    <div class="card-footer d-flex flex-row align-items-center justify-content-around">
        <button class="btn" id="edit"><img src="../multimedia/icons/edit_pencil.svg" alt=""></button>
        <button class="btn" id="delete"><img src="../multimedia/icons/delete_trash.svg" alt=""></button>
    </div>
    `;
    bandeja.innerHTML += html;
}