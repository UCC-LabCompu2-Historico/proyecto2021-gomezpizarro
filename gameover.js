/**
 * Realiza la animacion de GAMEOVER del juego
 * @method animar
 */
var y=0;
function animar () {
    var canvas = document.getElementById('animación');
    var ctx = canvas.getContext('2d');

    canvas.width = canvas.width //para limpiar el canvas

    var img = new Image();
    img.src = 'Imagenes/fallingman.jpg';

    console.log(img.width);

    img.onload = function () {
        ctx.drawImage(img,(canvas.width/2)-(img.width/2),y);
    }
    y+=20;
    if (y >= canvas.height) {
        canvas.style.display = 'none';
        document.getElementById('gameoverbody').style.backgroundColor = 'black';
        document.getElementById('gameoverdiv').style.display = 'block';
    }
}