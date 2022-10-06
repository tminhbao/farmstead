const searchElement = document.querySelector("input");

searchElement.onclick = function () {
  const navbarSearchElement = document.querySelector(".navbar-search");
  searchElement.style.width = "160px";
};

searchElement.onblur = function () {
  searchElement.style.width = "30px";
};
