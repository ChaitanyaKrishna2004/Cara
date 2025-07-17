const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const shopnow = document.getElementsByClassName("shopnow");

for (let i = 0; i < shopnow.length; i++) {
  shopnow[i].addEventListener("click", function () {
    window.location.href = "shop.html";
  });
}

const exploreBtns = document.querySelectorAll("button.normal");

exploreBtns.forEach((btn) => {
  if (btn.textContent.trim() === "Explore More") {
    btn.addEventListener("click", function () {
      window.location.href = "shop.html";
    });
  }
});
