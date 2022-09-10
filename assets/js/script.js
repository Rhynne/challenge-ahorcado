const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width / 2;
const ch = canvas.height / 2;

ctx.fillStyle = '#f3f5fc';
ctx.fillRect(0, 0, 800, 600);

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

// Gallows
drawLine(250, 400, 550, 400, 5, 'round', '#0A3871');

// Text
const words = ['vue', 'react', 'angular'];
const wordPicked = randomNumber(words.length);
const wordUpperCase = words[wordPicked].toUpperCase();
const wordSplit = wordUpperCase.split('');
let tw = cw / wordSplit.length;
let x = 200;

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function drawWord() {
  for (let i = 0; i < wordSplit.length; i++) {
    drawLine(210 + tw * i, 490, 250 + tw * i, 490, 5, 'round', '#0A3871');
  }
}

drawWord();

let keys = [];
let keysDrawed = [];
let attempt = 0;

document.addEventListener('keydown', (e) => {
  let key = e.key;
  key = key.toUpperCase();

  if (!keys.includes(key) && isNaN(key)) {
    keys.push(key);
  }

  if (
    !wordUpperCase.includes(key) &&
    isNaN(key) &&
    !keysDrawed.includes(key) &&
    attempt < 10
  ) {
    drawText(key, x + tw, 530, '24px Inter', '#495057');
    keysDrawed.push(key);
    x = x + 30;
    attempt = attempt + 1;

    switch (attempt) {
      case 1:
        drawLine(300, 50, 300, 400, 5, 'round', '#0A3871');
        break;
      case 2:
        drawLine(300, 50, 500, 50, 5, 'round', '#0A3871');
        break;
      case 3:
        drawLine(500, 50, 500, 100, 5, 'round', '#0A3871');
        break;
      case 4:
        drawCircle(500, 130, 30, '#0A3871');
        break;
      case 5:
        drawLine(500, 160, 500, 280, 5, 'round', '#0A3871');
        break;
      case 6:
        drawLine(500, 160, 450, 220, 5, 'round', '#0A3871');
        break;
      case 7:
        drawLine(500, 160, 550, 220, 5, 'round', '#0A3871');
        break;
      case 8:
        drawLine(500, 280, 450, 340, 5, 'round', '#0A3871');
        break;
      case 9:
        drawLine(500, 280, 550, 340, 5, 'round', '#0A3871');
        break;
      default:
        break;
    }
  } else {
    for (let i = 0; i < wordSplit.length; i++) {
      if (wordSplit[i].includes(key) && !keysDrawed.includes(key)) {
        drawText(key, 255 + tw * i, 480, '48px Inter', '#0A3871');
        keysDrawed.push(key);
      }
    }
  }
});
