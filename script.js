// ID Link
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}



const v1 = document.getElementById("bg-video1");
const v2 = document.getElementById("bg-video2");

v1.addEventListener("ended", () => {
  v1.style.display = "none";
  v2.style.display = "block";
  v2.play();
});

v2.addEventListener("ended", () => {
  v2.style.display = "none";
  v1.style.display = "block";
  v1.play();
});