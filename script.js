let currentPage = 1;

function showPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
  currentPage = num;

  if (num === 3) typeWriter("type1", "Everything you do means the world to me. Thank you for always being there ❤️", 40);
  if (num === 4) typeWriter("type2", "I appreciate you more than words can explain. You are my everything ❤️", 40);

  if (num === 5) finalAnimation();
}

function nextPage(num) {
  showPage(num);
}

/* OPEN BOX ANIMATION */
function openBox() {
  let box = document.getElementById("box");
  box.classList.add("shake");

  setTimeout(() => {
    spawnHearts();
    setTimeout(() => showPage(2), 2500);
  }, 500);
}

/* HEART RAIN */
function spawnHearts() {
  for (let i = 0; i < 40; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

/* TYPEWRITER */
function typeWriter(id, text, speed) {
  let i = 0;
  let el = document.getElementById(id);
  el.innerHTML = "";

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

/* FINAL ANIMATION */
function finalAnimation() {
  let heart = document.getElementById("heart");
  let text = document.getElementById("finalText");

  setTimeout(() => {
    heart.style.transform = "scale(1.5)";
  }, 1000);

  setTimeout(() => {
    heart.style.transform = "scale(0)";
    document.body.style.background = "red";
  }, 2500);

  setTimeout(() => {
    document.body.style.background = "#fff0f5";
    heart.style.transform = "scale(1)";
    text.innerHTML = "I LOVE YOUUUU ❤️✨<br>I HOPE U LIKED THISSS";
  }, 4000);
}
