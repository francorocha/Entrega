//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let users = Array({
        usuario: email.value,
        contraseña: pass.value
    });
    localStorage.setItem('users',JSON.stringify(users));
    location.href='index.html';
});
document.addEventListener("DOMContentLoaded", function(e){

});