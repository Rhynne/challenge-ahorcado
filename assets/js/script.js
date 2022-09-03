const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 800, 600);

// Gallows
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(250, 400);
ctx.lineTo(550, 400);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(300, 400);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(500, 50);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(500, 50);
ctx.lineTo(500, 100);
ctx.stroke();

ctx.fillStyle = '#0A3871';
ctx.beginPath();
ctx.arc(500, 130, 30, 0, 2 * Math.PI);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(500, 160);
ctx.lineTo(500, 280);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(500, 160);
ctx.lineTo(450, 220);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(500, 160);
ctx.lineTo(550, 220);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(500, 280);
ctx.lineTo(450, 340);
ctx.stroke();

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(500, 280);
ctx.lineTo(550, 340);
ctx.stroke();

// Text
ctx.fillStyle = '#0A3871';
ctx.font = '48px Inter';
ctx.fillText('H', 250, 480);

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = '#0A3871';
ctx.beginPath();
ctx.moveTo(250, 490);
ctx.lineTo(285, 490);
ctx.stroke();

ctx.fillStyle = '#495057';
ctx.font = '24px Inter';
ctx.fillText('H', 250, 520);
