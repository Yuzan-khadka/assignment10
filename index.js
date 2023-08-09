 const canvas = document.getElementById('main');
 const canvasContext = canvas.getContext('2d');
 let isDrawing = false;
 let lastX = 0;
 let lastY = 0;
 let currentColor = 'black';
 let brushSize = 2;


 // start drawing when the mouse is pressed
 function startDrawing(e) {
   isDrawing = true;
   [lastX, lastY] = [e.offsetX, e.offsetY];
 }

 // draw lines when the mouse is moved
 function draw(e) {
   if (!isDrawing) return;
   canvasContext.beginPath();
   canvasContext.moveTo(lastX, lastY);
   canvasContext.lineTo(e.offsetX, e.offsetY);
   canvasContext.strokeStyle = currentColor;
   canvasContext.lineWidth = brushSize;
   canvasContext.lineCap = 'round';
   canvasContext.lineJoin = 'round';
   canvasContext.stroke();
   [lastX, lastY] = [e.offsetX, e.offsetY];
 }

//  stop drawing when the mouse is released
 function stopDrawing() {
   isDrawing = false;
 }

 // set the current brush color
 function setBrushColor(color) {
   currentColor = color;
 }

 // change the brush size
 function updateBrushSize() {
   brushSize = document.getElementById('slider').value;
   document.getElementById("brushSize").innerHTML =brushSize;

 }

 // start new canvas
 function newCanvas() {
   canvasContext.clearRect(0, 0, canvas.width, canvas.height);
 }

  // Event listeners to handle drawing actions
 canvas.addEventListener('mousedown', startDrawing);
 canvas.addEventListener('mousemove', draw);
 canvas.addEventListener('mouseup', stopDrawing);
 canvas.addEventListener('mouseout', stopDrawing);
