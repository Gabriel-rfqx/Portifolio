const tela = document.getElementById("visivel")
const paginas = document.getElementById("paginas")
var paginas_right = getComputedStyle(paginas).getPropertyValue('--right-value').trim();

const aparecer = document.getElementsByClassName("aparecer")

function mudarPagina(x, y) {
   paginas.style.setProperty('--right-value', `${x}`)
   paginas.style.setProperty('--bottom-value', `${y}`)
}

document.getElementsByClassName("aparecer")[0].addEventListener("click", () => {
    mudarPagina("000vw");
});
