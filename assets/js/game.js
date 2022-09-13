let words = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'JAVA',
  'SPRING',
  'MYSQL',
  'MONGODB',
];
let wordPicked = '';
let x = 200;
let key = '';
let keys = [];
let keysDrawed = [];
let attempt = 0;
let win = 0;

function selectWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  wordPicked = word;
}

function gameStart() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('game').style.display = 'grid';
  document.getElementById('new-word').style.display = 'none';
  selectWord();
  drawCanvas();
}

function gameRestart() {
  clearVariables();
  clearCanvas();
  selectWord();
  drawCanvas();
}

function gameEnd() {
  clearVariables();
  clearCanvas();
  document.getElementById('start').style.display = 'grid';
  document.getElementById('game').style.display = 'none';
  document.getElementById('new-word').style.display = 'none';
}

function clearVariables() {
  wordPicked = '';
  x = 200;
  key = '';
  keys = [];
  keysDrawed = [];
  attempt = 0;
  win = 0;
  document.getElementById('input-word').value = '';
}

function addWord() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('game').style.display = 'none';
  document.getElementById('new-word').style.display = 'grid';
}

function cancelWord() {
  document.getElementById('start').style.display = 'grid';
  document.getElementById('game').style.display = 'none';
  document.getElementById('new-word').style.display = 'none';
  document.getElementById('input-word').value = '';
}

function saveAndStart() {
  let word = document.getElementById('input-word').value;
  words.push(word.toUpperCase());
  gameStart();
}

document.addEventListener('keydown', (e) => {
  let tw = 600 / wordPicked.length;

  if (e.keyCode >= 65 && e.keyCode <= 90) {
    key = e.key;
    key = key.toUpperCase();
  }

  if (!keys.includes(key)) {
    keys.push(key);
  }

  if (
    !wordPicked.includes(key) &&
    !keysDrawed.includes(key) &&
    attempt < 9 &&
    win != wordPicked.length
  ) {
    drawText(key, x + tw, 530, '24px Inter', '#495057');
    keysDrawed.push(key);
    x = x + 25;
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
        drawText('¡Perdiste!', 400, 30, '36px Inter', 'red');
        drawText(
          'Palabra secreta: ' + wordPicked,
          400,
          570,
          '24px Inter',
          'red'
        );
        break;
    }
  } else {
    if (!keysDrawed.includes(key) && attempt < 9 && win != wordPicked.length) {
      for (let i = 0; i < wordPicked.length; i++) {
        if (wordPicked[i].includes(key)) {
          drawText(key, 175 + tw * i, 480, '48px Inter', '#0A3871');
          win = win + 1;
        }
        if (win == wordPicked.length) {
          drawText('¡Felicidades!', 400, 30, '36px Inter', 'green');
          break;
        }
      }

      keysDrawed.push(key);
    }
  }
});
