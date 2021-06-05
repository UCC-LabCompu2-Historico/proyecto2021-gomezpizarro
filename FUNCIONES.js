// no contiene nada aun...

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
function obtener_num_jugador(id) { //NO anda correctamente
    let num = document.getElementById(id).value;
    let jugador = new numero(0,0,0,0);
    let control = 0;
    num = parseInt(num);
    if (num > 9999 || num < 1000){ //entra pero no ejecuta el contenido
        document.getElementById('div1').style.display = 'none';//no funciona
        document.getElementById("foot").style.display = 'none';//no funciona
        document.getElementById('div2').style.display = 'block';//no funciona
        congelar(5);//no funciona
        document.getElementById('div1').style.display = 'block';//no funciona
        document.getElementById("foot").style.display = 'block';//no funciona
        document.getElementById('div2').style.display = 'none';//no funciona
    }else{
        num=num.toString();
        let aux1,aux2,aux3,aux4;
        aux1=num[0];
        aux2=num[1];
        aux3=num[2];
        aux4=num[3];
        if ( aux1==aux2 || aux1==aux3 || aux1==aux4 || aux2==aux3 || aux2==aux4 || aux3==aux4 ){ //entra pero no ejecuta el contenido
            document.getElementById('div1').style.display = 'none';//no funciona
            document.getElementById('div3').style.display = 'block';//no funciona
            congelar(5);//no funciona
            document.getElementById('div1').style.display = 'block';//no funciona
            document.getElementById('div3').style.display = 'none';//no funciona
        }else{
            jugador.num1 = parseInt(aux1);
            jugador.num2 = parseInt(aux2);
            jugador.num3 = parseInt(aux3);
            jugador.num4 = parseInt(aux4);
            control++;
        }
    }
    let aux = jugador.completo();
    alert(aux);
    alert(control);
    if (control==1){
        window.open('Maquina.html','_self'); //no funciona
    }
}

//obtuvimos el numero del jugador
//ahora creamos el numero de la maquina
let aux
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
//numero de la computadora creado;
function mostrarNum(){  // esta funcion es solo para corrobar que anda, luego la eliminare
    let auxiliar = computadora.completo();
    alert (auxiliar);
}


