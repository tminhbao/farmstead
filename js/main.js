const searchElement = document.querySelector("input");

searchElement.onclick = function () {
  const navbarSearchElement = document.querySelector(".navbar-search");
  searchElement.style.width = "160px";
};

searchElement.onblur = function () {
  searchElement.style.width = "30px";
};

const sunIconElement = document.querySelector(".fa-sun");
const moonIconElement = document.querySelector(".fa-moon");

const changeTheme = function (x) {
  x.classList.remove("fa-regular fa-moon toggle-theme-icon");
  x.classList.add("fa-regular fa-sun toggle-theme-icon");
};

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

document.querySelector(".video-play-icon").onclick = function () {
  document.querySelector("small-dialog").classList.toggle("mfp-hide");
};
