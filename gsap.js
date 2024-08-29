const trabalho = document.getElementById("trabalho");

window.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    // Scroll up, move text to the left
    gsap.to(trabalho, { x: "-50px", duration: 3, ease: "power2.out" });
  } else {
    // Scroll down, move text to the right
    gsap.to(trabalho, { x: "+50px", duration: 3, ease: "power2.out" });
  }
});
