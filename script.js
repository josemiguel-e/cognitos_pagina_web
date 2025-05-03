






const voton = document.getElementById('mensaje');
const mostrartexto = document.getElementById('mostrartexto');

function actionbutton() {
    mostrartexto.textContent = 'respuesta guardada'
}

voton.addEventListener('click', actionbutton);