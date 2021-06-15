/**
 * Representa un numero de 4 digitos //aunque las encapsulaciones no enstan preparadas y se puede convertir en un numero mas grande
 * @constructor
 * @param {Number} num1 //cifra 1
 * @param {Number} num2 //cifra 2
 * @param {Number} num3 //cifra 3
 * @param {Number} num4 //cifra 4
 */
class numero {
    constructor (num1,num2,num3,num4){
        this.num1=num1;
        this.num2=num2;
        this.num3=num3;
        this.num4=num4;
    }
    completo(){
        return (this.num1.toString()+this.num2.toString()+this.num3.toString()+this.num4.toString());
    }
}
/**
 * random : devuelve un numero random entre limites establecidos
 * @param {Number} max - limite superior
 * @param {Number} min - limite inferior
 * @return {Number} random entero
 */
function random (min, max){
    var num =  Math.floor((Math.random() * (max - min + 1)) + min);
    return (Math.round(num));
}

//crearemos una lista con todas las posibilidades de numeros de 4 cifras distintas;
var lista = ["0123"];
var i=124;
while (i<10000){
    i=i.toString();
    if (i.length == 3) i = '0'+ i;
    if(!/(.).*\1/.test(i)){
        lista.push(i);
    }
    i=parseInt(i);
    i++;
}
//lista de numeros posibles creada;
console.log(lista); //para poder ver la lista en la consola
// creamos el numero de la maquina
var aux = random(0,5039);
aux = lista[aux];
var computadora = new numero(aux[0],aux[1],aux[2],aux[3]);
//numero de la computadora creado;
console.log(computadora.completo());//para poder ver la lista en la consola

// ahora tenemos que crear el algoritmo para que la maquina adivine el numero
//también tenemos que obtener el intento de adivinación del jugador
aux = random(0,5039);
aux = lista[aux];
var intento_maquina = new numero(aux[0],aux[1],aux[2],aux[3]); //numero de intento de adivinacion de la computadora creado;
var intento_jugador = new numero(0,0,0,0); //aca se guardara el intento del jugador
var adivino = 'NO',intentos = 0;
var canvas;
/**
 * obtener_num_intento_jugador :
 *      Obtiene el intento de adivinacion del jugador y ejecuta el codigo necesario para escribir respuestas en el canvas,
 *      oculta y muestra las diviciones con los mensajes necesarios para que el juego pueda seguir su curso
 * @param {string} id - lleva el id del imput donde se obtiene el num
 * @return
 */
function obtener_num_intento_jugador(id) {
    console.log(intento_maquina.completo());//para poder el intento de la maquina en consola
    var num = document.getElementById(id).value;
    num=num.toString(); // para poder valuar que sea de 4 cifras
    var control = 0;
    canvas = document.getElementById('comentarios');
    var ctx = canvas.getContext('2d'); //preparamos el canvas
    if ( num.length != 4){
       alert ("EL NUMERO DEBE CONTENER 4 CIFRAS - Ingreselo de nuevo");
    }else{
        var aux1,aux2,aux3,aux4;
        aux1=num[0];
        aux2=num[1];
        aux3=num[2];
        aux4=num[3];
        if ( aux1==aux2 || aux1==aux3 || aux1==aux4 || aux2==aux3 || aux2==aux4 || aux3==aux4 ){
            alert("RECURDE QUE NO SE DEBEN REPETIR CIFRAS");
        }else{
            intento_jugador.num1 = Number(aux1);
            intento_jugador.num2 = Number(aux2);
            intento_jugador.num3 = Number(aux3);
            intento_jugador.num4 = Number(aux4);
            control++;
            console.log(intento_jugador.completo());//para verlo en inspeccionar
        }
    }
    if (control==1) {
        intentos++;
        alert("INTENTO RECIBIDO");
        document.getElementById('div1').style.display = 'none';
        var bien = 0, regular = 0;
        document.getElementById('canvas').style.display = 'block';
        if (intento_jugador.num1 == computadora.num1) bien++;
        if (intento_jugador.num2 == computadora.num2) bien++;
        if (intento_jugador.num3 == computadora.num3) bien++;
        if (intento_jugador.num4 == computadora.num4) bien++;
        if (intento_jugador.num1 == computadora.num2 || intento_jugador.num1 == computadora.num3 || intento_jugador.num1 == computadora.num4) regular++;
        if (intento_jugador.num2 == computadora.num1 || intento_jugador.num2 == computadora.num3 || intento_jugador.num2 == computadora.num4) regular++;
        if (intento_jugador.num3 == computadora.num1 || intento_jugador.num3 == computadora.num2 || intento_jugador.num3 == computadora.num4) regular++;
        if (intento_jugador.num4 == computadora.num1 || intento_jugador.num4 == computadora.num2 || intento_jugador.num4 == computadora.num3) regular++;
        let texto;
        if (bien == 4 || intento_jugador.completo() == computadora.completo()) {
            texto = "Has adivinado el numero , pero la maquina todavia puede adivinar y asi empatar";
            adivino = 'SI';
        } else {
            texto = "Intento " + intentos.toString() + "= " + intento_jugador.completo() + ": Tiene " + bien.toString() + " Bien y " + regular.toString() + " Regular. Sigue probando...";
        }
        ctx.font="bold italic 20px arial";
        ctx.fillStyle = "brown";
        if ( intentos>12 ){

            document.getElementById('comentarios').style.height = 500 + (30*(intentos-12));
        }
        ctx.fillText("TUS INTENTOS", 40, 40 );
        ctx.fillText(texto, 40, 40 + (30 * intentos));
        document.getElementById('div5').style.display = 'block';
        document.getElementById('si_no').style.display = 'block';
        canvas = document.getElementById('adivinacionMaquina');
        ctx = canvas.getContext('2d');
        ctx.fillStyle = "brown";
        ctx.font="bold italic 35px arial";
        ctx.clearRect(20, 5, 150, 50);//para borrar
        ctx.fillText(intento_maquina.completo(), 20, 40);//aca escribe
    }
}
/**
 * SII : ejecuta las lineas de código necesarias para continuar con el juego, tras apretar el botón 'si'
 * @return
 */
function SII (){
    if (adivino == 'SI'){
        window.open('tie.html','_self');
    }else{
        window.open('gameover.html','_self');
    }
}
/**
 * NOO : ejecuta las lineas de código necesarias para continuar con el juego, tras apretar el botón 'no'
 * @return
 */
function NOO (){
    document.getElementById('si_no').style.display = 'none';
    if (adivino == 'SI'){
        window.open('you win.html','_self');
    }else{
        document.getElementById('div6').style.display = 'block';
    }
}
/**
 * REGULAR_BIEN : ejecuta las lineas de código necesarias para continuar con el juego, tras apretar el botón OK de la div6
 * @return
 */

function REGULAR_BIEN(){
    let bien = document.getElementById('BIEN').value;
    let regular = document.getElementById('REGULAR').value;
    let suma = Number(bien) + Number(regular) ;
    if ( bien<0 || regular<0){
        alert ("NO SE PUEDEN INGRESAR NUMERO NEGATIVOS")
    }else{
        if (suma>4){
            alert("LA SUMA DE BIEN + MAL NO PUEDE SER > A 4")
        }
        else{
            // aca va el algoritmo que hace que la maquina adivine el numero en base a los bien y a los regular
            intento_maquina.num1 = String(intento_maquina.num1);
            intento_maquina.num2 = String(intento_maquina.num2);
            intento_maquina.num3 = String(intento_maquina.num3);
            intento_maquina.num4 = String(intento_maquina.num4);
            //la lista de posibilidades se encuentra en string
            for (let i=0 ; i<lista.length ;i++) {
                let cuenta_bien = 0 , cuenta_regular = 0;
                if(intento_maquina.num1 === lista[i][0])cuenta_bien++;
                if(intento_maquina.num2 === lista[i][1])cuenta_bien++;
                if(intento_maquina.num3 === lista[i][2])cuenta_bien++;
                if(intento_maquina.num4 === lista[i][3])cuenta_bien++;
                if(intento_maquina.num1 === lista[i][1] || intento_maquina.num1 === lista[i][2] || intento_maquina.num1 === lista[i][3])cuenta_regular++;
                if(intento_maquina.num2 === lista[i][0] || intento_maquina.num2 === lista[i][2] || intento_maquina.num2 === lista[i][3])cuenta_regular++;
                if(intento_maquina.num3 === lista[i][0] || intento_maquina.num3 === lista[i][1] || intento_maquina.num3 === lista[i][3])cuenta_regular++;
                if(intento_maquina.num4 === lista[i][0] || intento_maquina.num4 === lista[i][1] || intento_maquina.num4 === lista[i][2])cuenta_regular++;
                if (cuenta_bien != bien || cuenta_regular != regular){
                    lista.splice(i,1);
                }
            }
        }

        if (lista.length==0){
            alert("TU NUMERO NO EXISTE - revisa que estes empleando bien la cantidad de BIEN y REGULAR que indicas")
            window.open('gameover.html','_self');
        }
        aux = random(0,lista.length-1);
        aux = lista[aux];
        intento_maquina = new numero(aux[0],aux[1],aux[2],aux[3]); //este sera el proximo intento de la maquina
        document.getElementById('div5').style.display = 'none';
        document.getElementById('div6').style.display = 'none';
        document.getElementById('div1').style.display = 'block';
    }
}

// asi como esta el juego debería andar correctamente
// sin embargo hay lineas de codigo que no se ejecutan y no se puede jugar
