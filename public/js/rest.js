//operador rest, permite recibir una gran cantidad argumentos.
const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0)
};

//operador spred descompone el array en los elementos que lo componen.

const numeros = [1, 2, 3]

function suamr(x, y, z) {
    return x + y + z;
}

sumar(...numeros);

//destructuring, descompone las propuiedades de un objeto y los asigna a variables.

const usuario = {
    nombre: "Gino smiyh",
    edad: 34
};

const { nombre, edad } = usuario;

let infoFunkos = {
    'starwars': [
        {
            serie: "STAR WARS",
            modelo: "Baby yoda blueball",
            descripcion: "Figura coleccionable de baby yoda (Grogu) - The Mandalorian saga, edicion limitada",
            precio: 3520,
            img: "/star-wars/baby-yoda-1.webp",
            img2: "/star-wars/baby-yoda-box.webp"
        },
        {
            serie: "STAR WARS",
            modelo: "Bobbafeth",
            descripcion: "Figura coleccionable de Bobbafeth - The Mandalorian saga, edicion limitada",
            precio: 2550,
            img: "/star-wars/bobbafeth-1.webp",
            img2: "/star-wars/bobbafeth-box.webp"
        },
        {
            serie: "STAR WARS",
            modelo: "Luke",
            descripcion: "Figura coleccionable de Luke - The Mandalorian saga, edicion limitada",
            precio: 5000,
            img: "/star-wars/luke-1.webp",
            alt: "/star-wars/luke-box  .webp"
        },
        {
            serie: "STAR WARS",
            modelo: "Stromtrooper lightsaber",
            descripcion: "Figura coleccionable de stormtrooper lightsaber - The mandalorian saga.",
            precio: 2808,
            img: "star-wars/trooper-1.webp",
            img2: "star-wars/trooper-box.webp"
        }
    ],
    'harrypotter': [
        {
            serie: "HARRY POTTER",
            modelo: "Luna lovegood lion mask",
            descripcion: "Figura coleccionable de Luna lovegood de la película Harry potter.",
            precio: 2420,
            img: "harry-potter/luna-1.webp",
            img2: "harry-potter/luna-box.webp"
        },
        {
            serie: "HARRY POTTER",
            modelo: "Patronus de snape",
            descripcion: "Figura coleccionable Funko de patronus de snape de la película Harry potter.",
            precio: 3200,
            img: "harry-potter/snape-patronus-1.webp",
            img2: "harry-potter/snape-patronus-box.webp"
        },
        {
            serie: "HARRY POTTER",
            modelo: "Hermione",
            descripcion: "Figura coleccionable Funko de Hermione de la película Harry potter.",
            precio: 1620,
            img: "harry-potter/Hermione-1.webp",
            img2: "harry-potter/Hermione-box.webp"
        },
        {
            serie: "HARRY POTTER",
            modelo: "Harry Potter",
            descripcion: "Figura coleccionable Funko de Harry Potter de la película Harry potter.",
            precio: 4500,
            img: "harry-potter/harry-1.webp",
            img2: "harry-potter/harry-box.webp"
        }
    ],
    'pokemon': [
        {
            serie: "POKEMON",
            modelo: "Pidgeotto",
            descripcion: "Figura coleccionable de Pidgeotto de la serie POKEMON.",
            precio: 3670,
            img: "pokemon/pidgeotto-1.webp",
            img2: "pokemon/pidgeotto-box.webp"
        },
        {
            serie: "POKEMON Indigo",
            modelo: "Vulpix",
            descripcion: "Figura coleccionable de Vulpix de la serie de Pokemón Indigo.",
            precio: 2900,
            img: "pokemon/vulpix-1.webp",
            img2: "pokemon/vulpix-box.webp",

        },
        {
            serie: "POKEMON Indigo",
            modelo: "Charmander",
            descripcion: "Figura coleccionable de Charmander de la serie de Pokemón Indigo.",
            precio: 4200,
            img: "pokemon/charmander-1.webp",
            img2: "pokemon/charmander-box.webp"
        },
        {
            serie: "POKEMON Indigo",
            modelo: "Dragonite",
            descripcion: "Figura coleccionable de Dragonite de la serie de Pokemón Indigo.",
            precio: 5600,
            img: "pokemon/dragonite-1.webp",
            img2: "pokemon/dragonite-box.webp"
        },
        {
            serie: "POKEMON Indigo",
            modelo: "Pikachu",
            descripcion: "Figura coleccionable de Pikachu de la serie de Pokemón Indigo.",
            precio: 6500,
            img: "pokemon/pikachu-1.webp",
            img2: "pokemon/pikachu-box.webp"
        }
    ]
}

const { starwars, pokemon, harrypotter } = infoFunkos

console.log(starwars); //muestra los array dento de cada obj
console.log(pokemon); //muestra los array dento de cada obj
console.log(harrypotter); //muestra los array dento de cada obj

//Destructurin con obj anidados.
const funkos = {
    "Yoda": {
        serie: "STAR WARS",
        modelo: "Baby yoda blueball",
        descripcion: "Figura coleccionable de baby yoda (Grogu) - The Mandalorian saga, edicion limitada",
        precio: 3520,
        img: "/star-wars/baby-yoda-1.webp",
        img2: "/star-wars/baby-yoda-box.webp"
    },
    "Bobbafeth": {
        serie: "STAR WARS",
        modelo: "Bobbafeth",
        descripcion: "Figura coleccionable de Bobbafeth - The Mandalorian saga, edicion limitada",
        precio: 2550,
        img: "/star-wars/bobbafeth-1.webp",
        img2: "/star-wars/bobbafeth-box.webp"
    },
    "Luke": {
        serie: "STAR WARS",
        modelo: "Luke",
        descripcion: "Figura coleccionable de Luke - The Mandalorian saga, edicion limitada",
        precio: 5000,
        img: "/star-wars/luke-1.webp",
        alt: "/star-wars/luke-box  .webp"
    },
    "Stromtrooper": {
        serie: "STAR WARS",
        modelo: "Stromtrooper lightsaber",
        descripcion: "Figura coleccionable de stormtrooper lightsaber - The mandalorian saga.",
        precio: 2808,
        img: "star-wars/trooper-1.webp",
        img2: "star-wars/trooper-box.webp"
    }
}
const {Luke : { serie: serieWar, modelo: modeloWar, precio: precioWar }} = funkos;
console.log(serieWar, modeloWar, precioWar);


//Destructuring array


let a, b, c;

[a, b, c] = [1, 2, 3]
console.log(a, b, c);
