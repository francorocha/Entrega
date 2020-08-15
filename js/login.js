//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const form = document.getElementById('form');
const che = document.getElementById("che")
const email = document.getElementById("email");
const pass = document.getElementById("pass");

form.addEventListener("submit", function (event) {
	event.preventDefault()
	let usuario = Array({
		correo: email.value,
		pass: pass.value
    });
    if(che.checked == true){
        localStorage.setItem('usuario', JSON.stringify(usuario));
        location.href='./index.html';
    }
    else{
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        location.href='./index.html';
    }
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
});
il');
const pass = document.getElementById('pass');


function inicio (){
    var cont = localStorage.getItem("contador");
    if(cont == 0){
        window.location.href="login.html";
    }
}
document.addEventListener("DOMContentLoaded", function(e){

});
