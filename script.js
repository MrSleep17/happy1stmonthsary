// Optional JavaScript to add any interactivity, you can extend this if needed

// Example: Flashing colors every loop
const textElement = document.getElementById('text');
let colors = ['#ff4d4d', '#ff8080', '#ffb3b3'];
let colorIndex = 0;

function changeColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  textElement.style.color = colors[colorIndex];
}

setInterval(changeColor, 3000);  // Change color every animation cycle (3 seconds)
