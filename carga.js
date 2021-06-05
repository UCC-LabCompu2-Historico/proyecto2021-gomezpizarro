// Uso un documento script separado para la pagina de carga por que estas funciones solo se pueden usar en dicha pagina

function abrirweb (){
    window.open('Jugador.html','_self');
}

async function  esperar (){
    setTimeout(abrirweb,7500);
}

