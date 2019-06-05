function limpaCampos() {
    event.preventDefault();
    var frm = document.formImovel;
    alertt("Limpando os campos para você");
    frm.proprietario.value = "";
    frm.matricula.value = 0;
}