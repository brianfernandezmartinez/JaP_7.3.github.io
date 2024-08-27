const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const terminos = document.getElementById('terminos');

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function(){
    const campos = document.querySelectorAll('input');
    let hayVacios = false;

    campos.forEach(campo => {
        if(campo.value.trim() === ''){
            hayVacios = true;
        }
    });

    if(!hayVacios && password1.value === password2.value && terminos.checked){
        showAlertSuccess();
    }else{
        showAlertError();
    }

});

    