
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
// creamos el numero de la maquina
let aux;
let computadora = new numero(0,0,0,0);
computadora.num1=random(1,9);
aux= random(0,9);
while (aux == computadora.num1){
    aux=random(0,9);
}
computadora.num2=aux;
aux=random(0,9);
while (aux==computadora.num1 || aux==computadora.num2){
    aux=random(0,9);
}
computadora.num3=aux;
aux=random(0,9);
while (aux==computadora.num1 || aux==computadora.num2 || aux==computadora.num3){
    aux=random(0,9);
}
computadora.num4 = aux;
//numero de la computadora creado;
function mostrarNum(){  // esta funcion es solo para comprobar que anda, luego la eliminare
    let auxiliar = computadora.completo();
    alert (auxiliar);
}
// ahora tenemos que crear el algoritmo para que la maquina adivine el numero
//tambien tenemos que obtener el intento de adivinacion del jugador

let intento_jugador = new numero(0,0,0,0);
let intento_maquina = new numero(0,0,0,0);


intento_maquina.num1=random(1,9);
aux = random(0,9);
while (aux == intento_maquina.num1){
    aux=random(0,9);
}
intento_maquina.num2=aux;
aux=random(0,9);
while (aux==intento_maquina.num1 || aux==intento_maquina.num2){
    aux=random(0,9);
}
intento_maquina.num3=aux;
aux=random(0,9);
while (aux==intento_maquina.num1 || aux==intento_maquina.num2 || aux==intento_maquina.num3){
    aux=random(0,9);
}
intento_maquina.num4 = aux;

let intentos = 0;
let canvas;
function obtener_num_intento_jugador(id) { //NO anda correctamente
    let num = document.getElementById(id).value;
    num=num.toString();// para controlar que el numero haya entrado como string
    let control = 0;
    canvas = document.getElementById('comentarios').getContext('2d');
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
            canvas.fillText(texto,40,30+(30*intentos));
        }
        //ahora la maquina intenta adivinar el numero
        document.getElementById('div4').style.display = 'none';
        document.getElementById('div5').style.display = 'block';
        canvas = document.getElementById('adivinacionMaquina').getContext('2d');
        canvas.fillText(intento_maquina.completo(),25,10);
    }
}
function SII (){
    window.open('gameover.html','_self');
}
function NOO (){
    document.getElementById('div5').style.display = 'none';
    document.getElementById('div6').style.display = 'block';

}
function REGULAR_BIEN(){
    document.getElementById('div6').style.display = 'none';
    let bien = document.getElementById('BIEN').value;
    let regular = document.getElementById('REGULAR').value;
    // aca va el algoritmo que hace que la maquina adivine el numero en base a los bien y a los regular
    document.getElementById('div1').style.display = 'block';
}

