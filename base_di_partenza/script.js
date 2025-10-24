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
  }, 800);
};

setInterval(randomLetter, 50);
