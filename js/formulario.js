//Validações do formulario

/**
 * Validação do Campo NOME se é um nome mesmo
 * @param {*} nome  
 */
function validaNome(nome) {
    var regex = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\\s]+$");
    if (regex.test(nome)) {
        return true;
    } else {
        return false;
    }
}
/**
 * Validação do Campo E-MAIL se estar no formato
 * @param {*} email  
 */
function validaEmail(email) {
    var regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Validação do Campo Telefone se tem todos os digitos necessarios
 * @param {*} telefone  
 */
function validaTelefone(telefone) {
    if (telefone.length == 16) {
        return true;
    } else {
        return false;
    }
}

/**
 * Realiza as validações ao clicar enviar
 */
function validaFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    if (validaNome(nome) && validaEmail(email) && validaTelefone(telefone)) {
        console.log(true)
            //document.getElementById("formOrcamento").submit();
        document.getElementById("div-orcamento").innerHTML = "<h2>Pedido ENVIADO</h2><p>Obrigado, entraremos em contato em breve!</p>";
    } else {
        let mensagemErro = ""
        if (!validaNome(nome)) {
            mensagemErro = "NOME, "
        }
        if (!validaEmail(email)) {
            mensagemErro = mensagemErro + " E-MAIL, "
        }
        if (!validaTelefone(telefone)) {
            mensagemErro = mensagemErro + " TELEFONE, "
        }
        document.getElementById("erro").innerHTML = "<label class='erro'>" + mensagemErro + " Invalido!</label>"
    }

}