document.getElementById("loveBtn").addEventListener("click", () => {
  for (let i = 0; i < 200; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  heart.style.fontSize = 10 + Math.random() * 30 + "px";
  heart.style.userSelect = "none";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
