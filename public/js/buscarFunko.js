
//busqueda de perfil
let productos = [
    {
      "serie": "STAR WARS",
      "modelo": "Baby yoda blueball",
      "descripcion": "Figura coleccionable de baby yoda (Grogu) - The Mandalorian saga, edicion limitada",
      "precio": 2000,
      "img": "/star-wars/baby-yoda-1.webp",
      "img2" :"/star-wars/baby-yoda-box.webp"
    },
    {
      "serie": "STAR WARS",
      "modelo": "Bobbafeth",
      "descripcion": "Figura coleccionable de Bobbafeth - The Mandalorian saga, edicion limitada",
      "precio": 2000,
      "img": "/star-wars/bobbafeth-1.webp",
      "img2":"/star-wars/bobbafeth-box.webp"
    },
    {
      "serie": "STAR WARS",
      "modelo": "Luke",
      "descripcion": "Figura coleccionable de Luke - The Mandalorian saga, edicion limitada",
      "precio": 2000,
      "img": "/star-wars/luke-1.webp",
      "alt":"/star-wars/luke-box  .webp"
    },
    {
      "serie": "STAR WARS",
      "modelo": "Stromtrooper lightsaber",
      "descripcion": "Figura coleccionable de stormtrooper lightsaber - The mandalorian saga.",
      "precio": 2000,
      "img": "/star-wars/trooper-1.webp",
      "img2":"/star-wars/trooper-box.webp"
    },
    {
      "serie": "POKEMON",
      "modelo": "Pidgeotto",
      "descripcion": "Figura coleccionable de Pidgeotto de la serie POKEMON.",
      "precio": 2000,
      "img": "/pokemon/pidgeotto-1.webp",
      "img2": "/pokemon/pidgeotto-box.webp"
    },
    {
      "serie": "POKEMON Indigo",
      "modelo": "Vulpix",
      "descripcion": "Figura coleccionable de Vulpix de la serie de Pokemón Indigo.",
      "precio": 2000,
      "img": "/pokemon/vulpix-1.webp",
      "img2": "/pokemon/vulpix-box.webp",
    
    },
    {
      "serie": "POKEMON Indigo",
      "modelo": "Charmander",
      "descripcion": "Figura coleccionable de Charmander de la serie de Pokemón Indigo.",
      "precio": 2000,
      "img": "/pokemon/charmander-1.webp",
      "img2": "/pokemon/charmander-box.webp"
    },
    {
      "serie": "POKEMON Indigo",
      "modelo": "Dragonite",
      "descripcion": "Figura coleccionable de Dragonite de la serie de Pokemón Indigo.",
      "precio": 2000,
      "img": "/pokemon/dragonite-1.webp",
      "img2": "/pokemon/dragonite-box.webp"
    },
    {
      "serie": "POKEMON Indigo",
      "modelo": "Pikachu",
      "descripcion": "Figura coleccionable de Pikachu de la serie de Pokemón Indigo.",
      "precio": 2000,
      "img": "/pokemon/pikachu-1.webp",
      "img2": "/pokemon/pikachu-box.webp"
    },
    {
      "serie": "HARRY POTTER",
      "modelo": "Luna lovegood lion mask",
      "descripcion": "Figura coleccionable de Luna lovegood de la película Harry potter.",
      "precio": 2000,
      "img": "/harry-potter/luna-1.webp",
      "img2": "/harry-potter/luna-box.webp"
    },
    {
      "serie": "HARRY POTTER",
      "modelo": "Patronus de snape",
      "descripcion": "Figura coleccionable Funko de patronus de snape de la película Harry potter.",
      "precio": 2000,
      "img": "/harry-potter/snape-patronus-1.webp",
      "img2": "/harry-potter/snape-patronus-box.webp"
    },
    {
      "serie": "HARRY POTTER",
      "modelo": "Hermione",
      "descripcion": "Figura coleccionable Funko de Hermione de la película Harry potter.",
      "precio": 2000,
      "img": "/harry-potter/Hermione-1.webp",
      "img2": "/harry-potter/Hermione-box.webp"
    },
    {
      "serie": "HARRY POTTER",
      "modelo": "Harry Potter",
      "descripcion": "Figura coleccionable Funko de Harry Potter de la película Harry potter.",
      "precio": 2000,
      "img": "/harry-potter/harry-1.webp",
      "img2": "/harry-potter/harry-box.webp"
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
