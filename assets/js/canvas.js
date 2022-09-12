const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawLine(mx, my, lx, ly, width, cap, color) {
  ctx.lineWidth = width;
  ctx.lineCap = cap;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(mx, my);
  ctx.lineTo(lx, ly);
  ctx.stroke();
  ctx.closePath();
}

function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function drawText(text, x, y, font, color) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y);
}

function drawWord() {
  let tw = 600 / wordPicked.length;
  for (let i = 0; i < wordPicked.length; i++) {
    drawLine(150 + tw * i, 490, 200 + tw * i, 490, 5, 'round', '#0A3871');
  }
}

function drawCanvas() {
  ctx.fillStyle = '#F3F5FC';
  ctx.fillRect(0, 0, 800, 600);
  drawLine(250, 400, 550, 400, 5, 'round', '#0A3871');
  drawWord();
}

function clearCanvas() {
  ctx.clearRect(0, 0, 800, 600);
}