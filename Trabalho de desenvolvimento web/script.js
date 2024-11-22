


window.onload = function() {
    if (document.title === "Explorando o Mundo - Sua Agência de Viagens") {
        
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contatoForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                event.preventDefault();
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});
