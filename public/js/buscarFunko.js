
//busqueda de perfil
const productos = [
    {
      "id" : 1,
      "SKU" : "STW001001",
      "product_licence": "STAR WARS",
      "porduct_name": "Baby yoda blueball",
      "product_description": "Figura coleccionable de baby yoda (Grogu) - The Mandalorian saga, edicion limitada",
      "product_price": 5200,
      "stock" : 8,
      "seels" : 11,
      "product_collection" : "starwars",
      "img_front": "/star-wars/baby-yoda-1.webp",
      "img_back" :"/star-wars/baby-yoda-box.webp"
    },
    {
      "id" : 2,
      "SKU" : "STW001002",
      "product_licence": "STAR WARS",
      "product_name": "Bobbafeth",
      "product_descripcion": "Figura coleccionable de Bobbafeth - The Mandalorian saga, edicion limitada",
      "product_price": 4500,
      "stock" : 8,
      "seels" : 11,
      "product_collection" : "starwars",
      "img_front": "/star-wars/bobbafeth-1.webp",
      "img_back":"/star-wars/bobbafeth-box.webp"
    },
    {
      "id": 3,
      "SKU": "STW001003",
      "product_licence": "STAR WARS",
      "porduct_name": "Luke",
      "product_description": "Figura coleccionable de Luke - The Mandalorian saga, edicion limitada",
      "product_price": 2000,
      "stock" : 8,
      "seels" : 11,
      "product_collection" : "starwars",
      "img": "/star-wars/luke-1.webp",
      "alt":"/star-wars/luke-box  .webp"
    },
    {
      "id" : 4,
      "SKU": "STW001004",
      "porduct_licene": "STAR WARS",
      "product_name": "Stromtrooper lightsaber",
      "product_description": "Figura coleccionable de stormtrooper lightsaber - The mandalorian saga.",
      "porudct_price": 2000,
      "stock" : 8,
      "seels" : 11,
      "product_collection" : "starwars",
      "img_front": "/star-wars/trooper-1.webp",
      "imgback":"/star-wars/trooper-box.webp"
    },
    {
      "id" : 5,
      "SKU": "PKKM001001",
      "product_licence": "POKEMON",
      "product_name": "Pidgeotto",
      "product_description": "Figura coleccionable de Pidgeotto de la serie POKEMON.",
      "product_price": 2000,
      "stock": 20,
      "seels": 15,
      "prodcut_collection": "pokemon",
      "img_front": "/pokemon/pidgeotto-1.webp",
      "img_back": "/pokemon/pidgeotto-box.webp"
    },
    {
      "id" : 6,
      "SKU": "PKM001002",
      "porduct_licence": "POKEMON",
      "product_name": "Vulpix",
      "product_description": "Figura coleccionable de Vulpix de la serie de Pokemón Indigo.",
      "product_pirce": 2000,
      "stock": 20,
      "seels": 4,
      "product_collection": "pokemon",
      "img_front": "/pokemon/vulpix-1.webp",
      "img_back": "/pokemon/vulpix-box.webp",
    
    },
    {
      "id": 7,
      "SKU": "PKM001003",
      "product_licence": "POKEMON",
      "product_name": "Charmander",
      "product_description": "Figura coleccionable de Charmander de la serie de Pokemón Indigo.",
      "product_price": 2000,
      "stock": 4,
      "seels": 21,
      "prodcut_collection": "pokemon",
      "img_front": "/pokemon/charmander-1.webp",
      "img_back": "/pokemon/charmander-box.webp"
    },
    {
      "id": 8,
      "SKU": "PKM001004",
      "porduct_licence": "POKEMON",
      "product_name": "Dragonite",
      "product_description": "Figura coleccionable de Dragonite de la serie de Pokemón Indigo.",
      "product_price": 2000,
      "stock": 4,
      "seels": 11,
      "prodcut_collection": "pokemon",
      "img_front": "/pokemon/dragonite-1.webp",
      "img_back": "/pokemon/dragonite-box.webp"
    },
    {
      "id": 9,
      "SKU": "PKM001005",
      "product_licnece": "POKEMON",
      "product_name": "Pikachu",
      "product_description": "Figura coleccionable de Pikachu de la serie de Pokemón Indigo.",
      "product_price": 2000,
      "stock": 2,
      "seels": 7,
      "prodcut_collection": "pokemon",
      "img": "/pokemon/pikachu-1.webp",
      "img2": "/pokemon/pikachu-box.webp"
    },
    {
      "id": 10,
      "SKU": "HPT001001",
      "product_licence": "HARRY POTTER",
      "prodcut_name": "Luna lovegood lion mask",
      "preoduct_description": "Figura coleccionable de Luna lovegood de la película Harry potter.",
      "product_price": 2000,
      "stock": 1,
      "seels": 4,
      "prodcut_collection": "harrypotter",
      "img_front": "/harry-potter/luna-1.webp",
      "img_back": "/harry-potter/luna-box.webp"
    },
    {
      "id": 12,
      "SKU": "HPT001002",
      "product_licence": "HARRY POTTER",
      "prodcut_name": "Patronus de snape",
      "porduct_description": "Figura coleccionable Funko de patronus de snape de la película Harry potter.",
      "produc_price": 2000,
      "stcok":4,
      "seels": 9,
      "prodcut_collection": "harrypotter",
      "img_front": "/harry-potter/snape-patronus-1.webp",
      "img_back": "/harry-potter/snape-patronus-box.webp"
    },
    {
      "id": 13,
      "SKU": "HPT001003",
      "product_licence": "HARRY POTTER",
      "produc_name": "Hermione",
      "product_description": "Figura coleccionable Funko de Hermione de la película Harry potter.",
      "produc_price": 2000,
      "stock": 6,
      "seels": 4,
      "prodcut_collection": "harrypotter",
      "img_front": "/harry-potter/Hermione-1.webp",
      "img_back": "/harry-potter/Hermione-box.webp"
    },
    {
      "id": 14,
      "SKU": "HPT001004",
      "product_licence": "HARRY POTTER",
      "prodcut_name": "Harry Potter",
      "product_description": "Figura coleccionable Funko de Harry Potter de la película Harry potter.",
      "prodcut_price": 2000,
      "stock": 4,
      "seels": 4,
      "product_collection": "harrypotter",
      "img_front": "/harry-potter/harry-1.webp",
      "img_back": "/harry-potter/harry-box.webp"
    }
  ]



function buscarFunko(modelo, propiedad) {
    
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].modelo === modelo) {
            return productos[i][propiedad] || "La propiedad no existe"
        }
    }
    return "el funko no está disponible por el momento."
}
console.log(buscarFunko("Patronus de snape", "descripcion"));
