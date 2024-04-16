var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:55px"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaEsquerda.style = "none"
    setaDireita.style = "display:flex; margin-top:55px"
}




