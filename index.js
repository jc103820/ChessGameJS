const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

const xOffset = canvas.offsetLeft;
const yOffset = canvas.offsetTop;

const drawCircle = (e) => {
    ctx.beginPath();
    ctx.rect(e.clientX - xOffset - 10,e.clientY - yOffset - 10,20,20); //Places it centered on the mouse
    ctx.stroke();
}

canvas.addEventListener('mousedown', drawCircle);