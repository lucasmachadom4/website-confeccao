//Exibe ou oculta Sessão formulario
function exibirFormulario() {
    let a = document.getElementById("div-orcamento");
    if (a.hidden === true) {
        a.hidden = false;
    } else {
        a.hidden = true;
    }
}
//Exibe ou oculta Sessão Sobre nos
function exibirSobreNos() {
    let a = document.getElementById("div-sobrenos");
    if (a.hidden === true) {
        a.hidden = false;
    } else {
        a.hidden = true;
    }
}