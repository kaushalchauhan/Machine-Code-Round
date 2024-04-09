let starContainer = document.getElementById("star-container");
let stars = document.querySelectorAll(".star");
let filled = 0;
let hoverCount = 0;
starContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("star")) {
    let currentFilledCount = e.target.dataset.index;
    document.getElementById("count").innerText = `${currentFilledCount}`;
    stars.forEach((star, index) => {
      star.classList.toggle("star-filled", index < currentFilledCount);
    });
    filled = currentFilledCount;
  }
});
starContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("star")) {
    let currentFilledCount = e.target.dataset.index;
    let hoverCount = e.target.dataset.index;
    document.getElementById("count").innerText = `${hoverCount}`;
    stars.forEach((star, index) => {
      star.classList.toggle("star-filled", index < currentFilledCount);
    });
  }
});
starContainer.addEventListener("mouseleave", function (e) {
  document.getElementById("count").innerText = `${filled}`;
  stars.forEach((star, index) => {
    star.classList.toggle("star-filled", index < filled);
  });
});
