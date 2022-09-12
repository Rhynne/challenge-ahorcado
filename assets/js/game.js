let words = ['JAVA', 'KOTLIN', 'SWIFT', 'OBJECTIVEC'];
let wordPicked = '';
let key = '';
let keys = [];
let keysDrawed = [];
let attempt = 0;

function selectWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  wordPicked = word;
  console.log(wordPicked);
}
/* 
document.addEventListener('keydown', (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    key = e.key;
    key = key.toUpperCase();
  }

  if (!keys.includes(key)) {
    keys.push(key);
  }

  if (!wordPicked.includes(key) && !keysDrawed.includes(key) && attempt < 9) {
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
        break;
    }
  } else {
    if (!keysDrawed.includes(key)) {
      for (let i = 0; i < wordPicked.length; i++) {
        if (wordPicked[i].includes(key)) {
          drawText(key, 255 + tw * i, 480, '48px Inter', '#0A3871');
        }
      }
      keysDrawed.push(key);
    }
  }
});
 */
function gameStart() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('game').style.display = 'grid';
  selectWord();
  drawCanvas();
}

function gameRestart() {
  selectWord();
  clearCanvas()
  drawCanvas();
}

function gameEnd() {
  clearCanvas();
  document.getElementById('start').style.display = 'grid';
  document.getElementById('game').style.display = 'none';
  wordPicked = '';
  key = '';
  keys = [];
  keysDrawed = [];
  attempt = 0;
}
