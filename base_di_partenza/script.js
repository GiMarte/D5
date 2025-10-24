const allg = document.querySelectorAll("svg g");

const reroll = function () {
  allg.forEach((g) => {
    g.style.opacity = Math.random() < 0.5 ? "0" : "1";
  });
};

setInterval(reroll, 500);
