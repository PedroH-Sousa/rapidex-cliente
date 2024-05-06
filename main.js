document.addEventListener('DOMContentLoaded', function() {
    var tamanhoSelecionado;
    var quantidadeSelecionada;

    // Adiciona um evento de clique aos tamanhos de pizza
    var tamanhoRadios = document.querySelectorAll('.tamanhoPizza input[type="radio"]');
    tamanhoRadios.forEach(function(radio) {
        radio.addEventListener('click', function() {
            tamanhoSelecionado = radio.nextElementSibling.textContent.trim();
            atualizarTotal();
        });
    });

    // Adiciona um evento de clique às quantidades de pizza
    var quantidadeRadios = document.querySelectorAll('.lista_escolha_preco input[type="radio"]');
    quantidadeRadios.forEach(function(radio) {
        radio.addEventListener('click', function() {
            quantidadeSelecionada = radio.nextElementSibling.textContent.trim();
            atualizarTotal();
        });
    });

    // Função para atualizar o total exibido no footer
    function atualizarTotal() {
        if (tamanhoSelecionado && quantidadeSelecionada) {
            var total = tamanhoSelecionado + ' - ' + quantidadeSelecionada + ' pizza(s)' + "Pizza de Calabresa";
            document.querySelector('footer h3').textContent = 'Total: ' + total;
        }
    }
});