

const campo_click = document.getElementById("campo_click")
const score_tela = document.getElementById("score")
var score = 0
campo_click.addEventListener("click", (e) => {   
    score = score + 1
    score_tela.innerHTML = score
})