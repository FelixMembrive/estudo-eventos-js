// // const pintarRegiao = () => {
// //     document.addEventListener("click", (event) => {
// //         this.document.style = "background-color: red";
// //     })
// // }

const paletaVermelha = document.querySelector("#vermelho")
paletaVermelha.style.backgroundColor = 'red'

const paletaAzul = document.querySelector("#azul")
paletaAzul.style.backgroundColor = 'blue'

const paletaVerde = document.querySelector("#verde")
paletaVerde.style.backgroundColor = 'green'

const paletaAmarela = document.querySelector("#amarelo")
paletaAmarela.style.backgroundColor = 'yellow'

const paletaCiano = document.querySelector("#ciano")
paletaCiano.style.backgroundColor = 'cyan'

const paletaRoxa = document.querySelector("#roxo")
paletaRoxa.style.backgroundColor = 'purple'


document.getElementById("paleta-de-cores").addEventListener("click", (event) => {
    console.log(event);
    const regiaoClicada = event.target
    const corClicada = regiaoClicada.getAttribute("style-color")
    const spam = document.getElementById("cor-atual")
    spam.setAttribute("name", corClicada)
})



document.getElementById("quadrantes").addEventListener("click", (event) => {
    const regiaoClicada = event.target.id
    if (regiaoClicada.includes("quadrante") == true) {
        console.log(regiaoClicada);
        const spam = document.getElementById("cor-atual")
        const corAtual = spam.getAttribute("name")
        console.log(corAtual);
        document.getElementById(regiaoClicada).style.backgroundColor = corAtual
    }
})