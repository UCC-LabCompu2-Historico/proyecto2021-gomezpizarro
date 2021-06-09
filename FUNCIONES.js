/**
 * Representa un numero de 4 digitos //aunque las encapsulaciones no enstan preparadas y se puede convertir en un numero mas grande
 * @constructor
 * @param {num} num1 //cifra 1
 * @param {num} num2 //cifra 2
 * @param {num} num3 //cifra 3
 * @param {num} num4 //cifra 4
 */
class numero { //anda correctamente
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
 * @param {num} max - limite superior
 * @param {num} min - limite inferior
 * @return {num} random entero
 */
function random (min, max){ //anda correctamente
    const num =  Math.floor((Math.random() * (max - min + 1)) + min);
    return (Math.round(num));
}
/**
 * congelar : congela el curso la de ejecucion por un determinado tiempo (usando un bucle que dura dicho tiempo)
 * @param {num} segundos - tiempo a esperar en segundos
 * @return
 */
function congelar (segundos) { //anda correctamente
    let tiempo = new Date();
    console.dir(tiempo);
    tiempo.setSeconds(tiempo.getSeconds() + segundos);
    while (new Date().getTime() < tiempo.getTime()) {
    }
}
//crearemos una lista con todas las posibilidades de numeros de 4 cifras distintas;
let lista = ["0123"];
let i=124;
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
let aux = random(0,5039);
aux = lista[aux];
let computadora = new numero(aux[0],aux[1],aux[2],aux[3]);
//numero de la computadora creado;
console.log(computadora.completo());//para poder ver la lista en la consola

// ahora tenemos que crear el algoritmo para que la maquina adivine el numero
//también tenemos que obtener el intento de adivinación del jugador
aux = random(0,5039);
aux = lista[aux];
let intento_maquina = new numero(aux[0],aux[1],aux[2],aux[3]); //numero de intento de adivinacion de la computadora creado;
console.log(intento_maquina.completo());//para poder ver la lista en la consola
let intento_jugador = new numero(0,0,0,0); //aca se guardara el intento del jugador
let adivino = 'NO',intentos = 0;
let canvas;
/**
 * obtener_num_intento_jugador :
 *      Obtiene el intento de adivinacion del jugador y ejecuta el codigo necesario para escribir respuestas en el canvas,
 *      oculta y muestra las diviciones con los mensajes necesarios para que el juego pueda seguir su curso
 * @param {string} id - lleva el id del imput donde se obtiene el num
 * @return
 */
function obtener_num_intento_jugador(id) { //NO anda correctamente
    let num = document.getElementById(id).value;
    num=num.toString(); // para poder valuar que sea de 4 cifras
    console.log(num);// para verlo en inspeccionar,despues lo saco
    let control = 0;
    canvas = document.getElementById('comentarios');
    // canvas = document.getElementById('comentarios').getContext('2d'); // no se si se puede usar asi y usar una variable menos
    let ctx = canvas.getContext('2d'); //preparamos el canvas
    alert(num.length);//por control, despues lo saco
    if ( num.length != 4){ //entra pero no ejecuta el contenido
        alert(num.length);//por control, despues lo saco // aca vemos que entra al if pero no ejecuta el resto
        document.getElementById('div1').style.display = 'none';//no funciona
        document.getElementById("foot").style.display = 'none';//no funciona
        document.getElementById('div2').style.display = 'block';//no funciona
        congelar(4);//no funciona
        document.getElementById('div1').style.display = 'block';//no funciona
        document.getElementById("foot").style.display = 'block';//no funciona
        document.getElementById('div2').style.display = 'none';//no funciona
    }else{
        let aux1,aux2,aux3,aux4;
        aux1=num[0];
        aux2=num[1];
        aux3=num[2];
        aux4=num[3];
        if ( aux1==aux2 || aux1==aux3 || aux1==aux4 || aux2==aux3 || aux2==aux4 || aux3==aux4 ){ //entra pero no ejecuta el contenido
            document.getElementById('div1').style.display = 'none';//no funciona
            document.getElementById("foot").style.display = 'none';//no funciona
            document.getElementById('div3').style.display = 'block';//no funciona
            congelar(4);//no funciona
            document.getElementById('div1').style.display = 'block';//no funciona
            document.getElementById("foot").style.display = 'block';//no funciona
            document.getElementById('div3').style.display = 'none';//no funciona
        }else{
            intento_jugador.num1 = parseInt(aux1);//no funciona
            intento_jugador.num2 = parseInt(aux2);//no funciona
            intento_jugador.num3 = parseInt(aux3);//no funciona
            intento_jugador.num4 = parseInt(aux4);//no funciona
            control++;
            let aux = intento_jugador.completo();// a modo de control, despues lo saco
            alert(aux);// a modo de control, después lo saco // vemos que el flujo llego hasta aca pero no ejecuto el resto del código
        }
    }
    if (control==1){ //entra pero no ejecuta el contenido
        intentos++;
        alert(control);// a modo de control, después lo saco // vemos que el flujo llego hasta aca pero no ejecuto el resto del código
        document.getElementById('div1').style.display = 'none';//no funciona
        document.getElementById('div4').style.display = 'block';//no funciona
        let bien = 0,regular = 0;
        document.getElementById('canvas').style.display= 'block';//no funciona
        if(intento_jugador.num1 == computadora.num1)bien++;
        if(intento_jugador.num2 == computadora.num2)bien++;
        if(intento_jugador.num3 == computadora.num3)bien++;
        if(intento_jugador.num4 == computadora.num4)bien++;
        if(intento_jugador.num1 == computadora.num2 || intento_jugador.num1 == computadora.num3 || intento_jugador.num1 == computadora.num4)regular++;
        if(intento_jugador.num2 == computadora.num1 || intento_jugador.num2 == computadora.num3 || intento_jugador.num2 == computadora.num4)regular++;
        if(intento_jugador.num3 == computadora.num1 || intento_jugador.num3 == computadora.num2 || intento_jugador.num3 == computadora.num4)regular++;
        if(intento_jugador.num4 == computadora.num1 || intento_jugador.num4 == computadora.num2 || intento_jugador.num4 == computadora.num3)regular++;
        let texto;
        if ( bien==4 || intento_jugador.completo() == computadora.completo() ){
            texto = "Has adivinado el numero , pero la maquina todavia puede adivinar y asi empatar";
            adivino = 'SI';
        }else {
            texto = "Intento " + intentos.toString() + "= " + intento_jugador.completo() + ": Tiene " + bien.toString() + " Bien y " + regular.toString() + " Regular. Sigue probando...";
        }
        ctx.fillText(texto,40,30+(30*intentos));
        console.log(bien);// para verlo en inspeccionar,despues lo saco
        console.log(regular);// para verlo en inspeccionar,despues lo saco
        congelar(3);//no funciona
        //ahora la maquina intenta adivinar el numero
        document.getElementById('div4').style.display = 'none';//no funciona
        document.getElementById('div5').style.display = 'block';//no funciona
        canvas = document.getElementById('adivinacionMaquina');//no funciona
        ctx = canvas.getContext('2d');//no funciona
        ctx.fillText(intento_maquina.completo(),25,10);//no funciona
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
    if (adivino == 'SI'){
        window.open('you win.html','_self');
    }else{
        document.getElementById('div5').style.display = 'none';
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
    let suma = bien + regular;
    if (suma>4){
        document.getElementById('div6').style.display = 'none';
        document.getElementById('div7').style.display = 'block';
        congelar(4);
        document.getElementById('div6').style.display = 'block';
        document.getElementById('div7').style.display = 'none';
    }
    else{
        // aca va el algoritmo que hace que la maquina adivine el numero en base a los bien y a los regular
        intento_maquina.num1 = intento_maquina.num1.toString();
        intento_maquina.num2 = intento_maquina.num1.toString();
        intento_maquina.num3 = intento_maquina.num1.toString();
        intento_maquina.num4 = intento_maquina.num1.toString();
        //la lista de posibilidades se encuentra en string
        for (let i=0 ; i<lista.length ;i++) {
            let cuenta_bien = 0 , cuenta_regular = 0;
            if(intento_maquina.num1 == lista[i][0])cuenta_bien++;
            if(intento_maquina.num2 == lista[i][1])cuenta_bien++;
            if(intento_maquina.num3 == lista[i][2])cuenta_bien++;
            if(intento_maquina.num4 == lista[i][3])cuenta_bien++;
            if(intento_maquina.num1 == lista[i][1] || intento_maquina.num1 == lista[i][2] || intento_maquina.num1 == lista[i][3])cuenta_regular++;
            if(intento_maquina.num2 == lista[i][0] || intento_maquina.num2 == lista[i][2] || intento_maquina.num2 == lista[i][3])cuenta_regular++;
            if(intento_maquina.num3 == lista[i][0] || intento_maquina.num3 == lista[i][1] || intento_maquina.num3 == lista[i][3])cuenta_regular++;
            if(intento_maquina.num4 == lista[i][0] || intento_maquina.num4 == lista[i][1] || intento_maquina.num4 == lista[i][2])cuenta_regular++;
            if (cuenta_bien != bien || cuenta_regular != regular){
                lista.splice(i,1);
            }
            aux = random(0,lista.length-1);
            aux = lista[aux];
            intento_maquina = new numero(aux[0],aux[1],aux[2],aux[3]); //este sera el proximo intento de la maquina
        }
        document.getElementById('div6').style.display = 'none';
        document.getElementById('div1').style.display = 'block';
    }
}

// asi como esta el juego debería andar correctamente
// sin embargo hay lineas de codigo que no se ejecutan y no se puede jugar
