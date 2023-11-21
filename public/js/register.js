document.title = "register | Funkoshop"

const input = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
const formulario = document.querySelector('form');
const btnSubmit = document.querySelector("#submit");


//Formulario que funciona y trae los elementos del eventeo.
formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    //Un metodo de acceder a los valores.
    let nombre = e.target.children[0].children[0].children[0].value,
    apellido = e.target.children[0].children[1].children[0].value,
    email = e.target.children[0].children[2].children[0].value,
    password1 = e.target.children[0].children[3].children[0].value,
    password2 = e.target.children[0].children[4].children[0].value
    
    console.log(e.target);
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(password1);
    console.log(password2);
})