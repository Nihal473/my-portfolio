function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
  const posX = e.clientX;
  const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`

    }, {
        duration: 500,
        fill: "forwards"
    });
});

// Floating Background Dots
const dotContainer = document.getElementById("background-dots");

for (let i = 0; i < 100; i++) {
  const dot = document.createElement("div");
  dot.classList.add("background-dot");

  dot.style.top = Math.random() * 100 + "vh";
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.animationDuration = (15 + Math.random() * 10) + "s";
  dot.style.opacity = Math.random();

  dotContainer.appendChild(dot);
}

const cursor = document.getElementById("cursor");
const navLinks = document.querySelectorAll("nav a");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});
