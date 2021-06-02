// no contiene nada aun...

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
function random (min, max){
    const num =  Math.floor((Math.random() * (max - min + 1)) + min);

    return (Math.round(num));
}

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
//ahora tengo que crear el numero del jugadora, que lo obtengo del input

function mostrarNum(){
    let auxiliar = computadora.completo();
    alert (auxiliar);
}
