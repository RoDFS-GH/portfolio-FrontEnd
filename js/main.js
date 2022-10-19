/* JS Document */


// funcionalidad flecha de desplazar hacia arriba

const desplazarArriba = document.getElementById("desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

