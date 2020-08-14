//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');


function inicio (){
    var cont = localStorage.getItem("contador");
    if(cont == 0){
        window.location.href="login.html";
    }
}
document.addEventListener("DOMContentLoaded", function(e){

});