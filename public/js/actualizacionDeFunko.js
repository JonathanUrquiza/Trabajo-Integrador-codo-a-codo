const Funko = {
    serie: "STAR WARS",
    modelo: "Stromtrooper lightsaber",
    descripcion: "Figura coleccionable de stormtrooper lightsaber - The mandalorian saga.",
    precio: 2808,
};

const actualizarFunko = ( {serie, modelo, descripcion, precio} ) => {
    console.log(serie)
    console.log( modelo);
    console.log(descripcion);
    console.log(precio);
}


const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max, min}) => (max + min) /2.0;
console.log(mitad(estadisticas));

let a = 6;
console.log(`El valor de a es ${a}`);

let nombre = "nora", edad = 5;
console.log(`El nombre es ${nombre} y su edad es ${edad}`);

class FunkoPop {
    constructor(serie) {
        this._serie = serie;
    }
 
    get serie() {
        return this._serie;
    }
    set serie(nuevaSerie) {
        this._serie = nuevaSerie
    }


}
const funkop = new FunkoPop("lukitas")
console.log(funkop.serie);