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
var y=0;
/**
 * Detiene el flujo del programa por la cantidad de milisegundos que se mandan como argumento
 * @method delay
 * @param milliseconds
 * @return
 */
 function delay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }
/**
 * Ejecuta la animacion de la persona cayendo al vacio
 * @method persona
 * @return
 */
function persona(){
    var canvas = document.getElementById('animacion');
    var ctx = canvas.getContext('2d');
    var imagen = new Image();
    imagen.src = 'Imagenes/caida.jpeg';

    imagen.onload = function () {
        for (var i=0 ; i<50 ; i++){
            delay(500);
            alert (y);
            ctx.drawImage (imagen,200,y);
            y=y+1;    
        }
    }
}