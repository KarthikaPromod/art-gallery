// script.js
document.addEventListener("DOMContentLoaded", () => {
  const arts = document.querySelectorAll(".art img");
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  arts.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
