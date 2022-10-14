const headerElement = document.querySelector(".header-b");
const logoElement = document.querySelector(".logo-icon");
const menuIconElement = document.querySelector(".fa-bars");
const navbarElement = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    headerElement.style.backgroundColor = "white";
    logoElement.style.color = "#000";
    menuIconElement.style.backgroundColor = "#fff";
    navbarElement.style.backgroundColor = "#000";
  } else {
    // Trước khi Scroll
    headerElement.style.backgroundColor = "transparent";
    logoElement.style.color = "#fb811e";
    menuIconElement.style.backgroundColor = "#fff";
    navbarElement.style.color = "#fff";
  }
});
