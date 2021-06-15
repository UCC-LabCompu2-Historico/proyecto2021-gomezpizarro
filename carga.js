// Uso un documento script separado para la pagina de carga por que estas funciones solo se pueden usar en dicha pagina
/**
 * Abre la página 'JUEGO.html' en la misma pestaña
 * @method abrir_web
 * @return
 */
function abrir_web (){
    window.open('JUEGO.html','_self');
}

/**
 * Espera 7.5s y ejecuta la función abrir web
 * @method esperar
 * @return
 */
async function  esperar (){
    setTimeout(abrir_web,7500);
}

