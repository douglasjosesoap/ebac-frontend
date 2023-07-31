const form = document.getElementById("form-valida");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = "Formulario válido! Número B é maior que o numero A.";
    } else {
        mensagem.textContent = "Formulario inválido! Número B deve ser maior que o numero A.";
    }

});