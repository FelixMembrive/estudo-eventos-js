// // const pintarRegiao = () => {
// //     document.addEventListener("click", (event) => {
// //         this.document.style = "background-color: red";
// //     })
// // }

const pintarRegiao = () => {
    document.addEventListener("click", (event, regiao) => {
        const regiaoClicada = event.target.id
        console.log(
            event.target.id
        );
        if (event.target.id === "quadrante1" ||
            event.target.id === "quadrante2" ||
            event.target.id === "quadrante3" ||
            event.target.id === "quadrante4") {
            document.getElementById(regiaoClicada).style = "background-color: red";
        }
    })
}