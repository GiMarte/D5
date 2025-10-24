const allg = document.querySelectorAll("svg g");

/* const reroll = function () {
  allg.forEach((g) => {
    g.style.opacity = Math.random() < 0.5 ? "0" : "1";
  });
};

setInterval(reroll, 100); 
*/

const randomLetter = () => {
  const g = allg[Math.floor(Math.random() * allg.length)];

  g.style.opacity = "0";

  setTimeout(() => {
    g.style.opacity = "1";
  }, 1600);
};

setInterval(randomLetter, 50);
setInterval(randomLetter, 100);

const nav = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const limit = 500;
  if (scrollY > limit) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "#ffc017";
  }
});
