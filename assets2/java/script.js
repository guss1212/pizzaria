
document.addEventListener("DOMContentLoaded", 

function() {
    const form = document.getElementById('pedidoForm');
    const mensagemDiv = document.getElementById('mensagem');
    const endereco = "Rua Exemplo, 123 - Cidade, Estado";

    form.addEventListener('submit', function(event) {
        
        event.preventDefault(); // Evita que o formulário seja enviado

        const saborSelecionado = form.sabor.value;
        
        const tamanhoSelecionado = form.tamanho.value;

        const mensagem = `Pedido realizado! Você escolheu uma pizza de ${saborSelecionado} no tamanho ${tamanhoSelecionado}. Aguarde em torno de 1 hora até a chegada do seu pedido em: ${endereco}`;

        mensagemDiv.textContent = mensagem;

        form.reset();
    });
});
