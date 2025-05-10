const text = "Welcome to my creative world.";
let i = 0;
const speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
