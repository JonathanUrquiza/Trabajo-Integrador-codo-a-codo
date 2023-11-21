document.title = "Producto | Funkoshop";


function crearHtml(array) {
    for (const item of array) {

        let html = "";
        //destructuring
        const {id, serie, modelo, descripcion, precio, img } = item;
        html =
            `
            <section class="card d-flex flex-md-row justify-content-around align-items-baseline">
            <picture class="card-img-top">
                <img src="../multimedia/${img}" alt="Figura funko de babyu yoda">
            </picture>
            <article class="card-body">
                <p class="card-text text-body-secondary">${serie}</p>
                <H2 class="card-title">${modelo}</H2>
                <p class="card-subtitle lead">${descripcion}</p>
                <p class="card-text">${precio}</p>
                <form action="" class="stock" method="get">
                    <label for="submit" name="submit"><button id="btnAdd" class="btn btn-dark btn-group" type="submit">Agregar al Carrito</button></label>
                </form>
                <p class="card-text text-info">3 CUOTAS SIN INTERÉS</p>
                <a href="" class="text-decoration-none text-dark card-link">Ver metodos de pago</a>
            </article>
        </section>
              `;
        contenedorD.innerHTML += html;
    }
    const arrayBotones = document.querySelectorAll(".btnAdd");
    console.log(arrayBotones);

}