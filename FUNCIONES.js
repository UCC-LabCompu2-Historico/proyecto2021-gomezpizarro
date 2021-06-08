const { join } = require("node:path");

class numero {//anda correctamente
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
function random (min, max){ //anda correctamente
    const num =  Math.floor((Math.random() * (max - min + 1)) + min);
    return (Math.round(num));
}

function congelar (segundos) { //anda correctamente
    let tiempo = new Date();
    console.dir(tiempo);
    tiempo.setSeconds(tiempo.getSeconds() + segundos);
    while (new Date().getTime() < tiempo.getTime()) {
    }
}
function isIsogram (str) {
    return !/(.).*\1/.test(str);
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
//tambien tenemos que obtener el intento de adivinacion del jugador
aux = random(0,(2520*2)-1);
aux = lista[aux];
let intento_maquina = new numero(aux[0],aux[1],aux[2],aux[3]);
//numero de intento de adivinacion de la computadora creado;
console.log(intento_maquina.completo());//para poder ver la lista en la consola
let intento_jugador = new numero(0,0,0,0);
let intentos = 0;
let canvas;
function obtener_num_intento_jugador(id) { //NO anda correctamente
    let num = document.getElementById(id).value;
    num=num.toString(); // para poder valuar que sea de 4 cifras
    let control = 0;
    canvas = document.getElementById('comentarios');
    let ctx = canvas.getContext('2d');
    alert(num.length);//por control, despues lo saco
    if ( num.length != 4){ //entra pero no ejecuta el contenido
        alert(num.length);//por control, despues lo saco
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
            intento_jugador.num1 = parseInt(aux1);
            intento_jugador.num2 = parseInt(aux2);
            intento_jugador.num3 = parseInt(aux3);
            intento_jugador.num4 = parseInt(aux4);
            control++;
            let aux = intento_jugador.completo();// a modo de control, despues lo saco
            alert(aux);// a modo de control, despues lo saco
        }
    }
    if (control==1){
        intentos++;
        alert(control);// a modo de control, despues lo saco
        document.getElementById('div1').style.display = 'none';//no funciona
        document.getElementById('div4').style.display = 'block';//no funciona
        congelar(3);
        if (intento_jugador.completo() == computadora.completo()){
            window.open('you win.html','_self');
        }else{
            let bien = 0,regular = 0;
            document.getElementById('canvas').style.display= 'block';
            if(intento_jugador.num1 == computadora.num1)bien++;
            if(intento_jugador.num2 == computadora.num2)bien++;
            if(intento_jugador.num3 == computadora.num3)bien++;
            if(intento_jugador.num4 == computadora.num4)bien++;
            if(intento_jugador.num1 == computadora.num2 || intento_jugador.num1 == computadora.num3 || intento_jugador.num1 == computadora.num4)regular++;
            if(intento_jugador.num2 == computadora.num1 || intento_jugador.num2 == computadora.num3 || intento_jugador.num2 == computadora.num4)regular++;
            if(intento_jugador.num3 == computadora.num1 || intento_jugador.num3 == computadora.num2 || intento_jugador.num3 == computadora.num4)regular++;
            if(intento_jugador.num4 == computadora.num1 || intento_jugador.num4 == computadora.num2 || intento_jugador.num4 == computadora.num3)regular++;
            let texto = "Intento " + intentos.toString() + "= " + intento_jugador.completo() + ": Tiene " + bien.toString() + " Bien y " + regular.toString() + " Regular. Sigue probando...";
            ctx.fillText(texto,40,30+(30*intentos));
        }
        //ahora la maquina intenta adivinar el numero
        document.getElementById('div4').style.display = 'none';
        document.getElementById('div5').style.display = 'block';
        canvas = document.getElementById('adivinacionMaquina');
        ctx = canvas.getContext('2d');
        ctx.fillText(intento_maquina.completo(),25,10);
    }
}
function SII (){
    window.open('gameover.html','_self');
}
function NOO (){
    document.getElementById('div5').style.display = 'none';
    document.getElementById('div6').style.display = 'block';
}
let pistas = []; // el formato de la lista es  [numero,cantbien,cantmal;x
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
        pistas.push([intento_maquina,bien,regular]);
        for (let i=0 ; i<pistas.length ;i++){
            if ( bien==0 && regular==0 ){
                for (let j=0 ; j<5040 ; j++){
                    if (intento_maquina[0]==lista[j][0] || intento_maquina[0]==lista[j][1] || intento_maquina[0]==lista[j][2] || intento_maquina[0]==lista[j][3]){
                        if (intento_maquina[1]==lista[j][0] || intento_maquina[1]==lista[j][1] || intento_maquina[1]==lista[j][2] || intento_maquina[1]==lista[j][3]){
                            if (intento_maquina[2]==lista[j][0] || intento_maquina[2]==lista[j][1] || intento_maquina[2]==lista[j][2] || intento_maquina[2]==lista[j][3]){
                                if (intento_maquina[3]==lista[j][0] || intento_maquina[3]==lista[j][1] || intento_maquina[3]==lista[j][2] || intento_maquina[3]==lista[j][3]){
                                    lista.splice(j,1);
                                }
                            }
                        }                    
                    }
                }
            }
            else{
                if ( suma==1 ){

                }
                if ( suma==2 ){

                }
                if ( suma==3 ){
                    
                }
                if ( suma==4 ){
                    
                }
            }   
        }
        document.getElementById('div6').style.display = 'none';
        document.getElementById('div1').style.display = 'block';
    }
}


