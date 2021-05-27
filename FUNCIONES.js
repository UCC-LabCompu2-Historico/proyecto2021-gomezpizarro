
/**
* Hace que el programa espere un cierto tiempo (en milisegundos)
* @method delay
* @param milliseconds
* @return 
*/


function delay (milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

/**
* genera el evento click sobre un objeto html, transcurrida una cierta espera...
* @method darclick
* @param id
* @param espera
* @return 
*/

function  darclick (espera,id){
    delay(espera);
    var a = document.getElementByid(id)
    a.click();
}

