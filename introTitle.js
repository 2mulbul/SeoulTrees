const seoulTreesTitle = document.querySelector(".start-title");
const introTl = gsap.timeline();

window.onload = function () {
  introTl
    .to(seoulTreesTitle, 0.5, { opacity: 0, ease: Power2.easeOut }, 5)
    .to(seoulTreesTitle, 0, { visibility: "hidden" }, 5.6);
};
