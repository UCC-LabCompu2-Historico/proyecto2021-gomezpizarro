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
var x=0;
function continuar (){
    x=x+2
}
/**
 * Espera 7.5s y ejecuta la función abrir web
 * @method persona
 * @return
 */
function persona(){
    var canvas = document.getElementById('animacion');
    var ctx = canvas.getContext('2d');
    var imagen = new Image();
    imagen.src = 'Imagenes/caida.jpeg';

    imagen.onload = function () {
        for (let i=0 ; i<50 ; i++ ){
            setTimeout(continuar,1);
            ctx.drawImage (imagen,x,200);    
        }
    }
}