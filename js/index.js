function exibirFormulario() {
    let a = document.getElementById("div-orcamento");
    if (a.hidden === true) {
        a.hidden = false;
    } else {
        a.hidden = true;
    }
}

function exibirSobreNos() {
    let a = document.getElementById("div-sobrenos");
    if (a.hidden === true) {
        a.hidden = false;
    } else {
        a.hidden = true;
    }
}