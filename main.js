document.addEventListener('DOMContentLoaded', function() {
    var pizzasSelecionadas = {};
    var limparBotao = document.getElementById('limparBotao');

    // Oculta o botão "Limpar" inicialmente
    limparBotao.style.display = 'none';

    // Adiciona um evento de clique aos tamanhos de pizza
    var tamanhoRadios = document.querySelectorAll('.tamanhoPizza input[type="radio"]');
    tamanhoRadios.forEach(function(radio) {
        radio.addEventListener('click', function() {
            var pizzaId = radio.closest('.cardapio').querySelector('.cardapio_titulo').textContent.trim();
            var tamanhoSelecionado = radio.nextElementSibling.textContent.trim();
            pizzasSelecionadas[pizzaId] = pizzasSelecionadas[pizzaId] || {};
            pizzasSelecionadas[pizzaId].tamanho = tamanhoSelecionado;
            atualizarTotal();
            // Mostra o botão "Limpar" quando uma pizza é selecionada
            limparBotao.style.display = 'block';
        });
    });

    // Adiciona um evento de clique às quantidades de pizza
    var quantidadeRadios = document.querySelectorAll('.lista_escolha_preco input[type="radio"]');
    quantidadeRadios.forEach(function(radio) {
        radio.addEventListener('click', function() {
            var pizzaId = radio.closest('.cardapio').querySelector('.cardapio_titulo').textContent.trim();
            var quantidadeSelecionada = radio.nextElementSibling.textContent.trim();
            pizzasSelecionadas[pizzaId] = pizzasSelecionadas[pizzaId] || {};
            pizzasSelecionadas[pizzaId].quantidade = quantidadeSelecionada;
            atualizarTotal();
            // Mostra o botão "Limpar" quando uma pizza é selecionada
            limparBotao.style.display = 'block';
        });
    });

    // Adiciona um evento de clique ao botão "Limpar"
    limparBotao.addEventListener('click', function() {
        pizzasSelecionadas = {};
        atualizarTotal();
        // Oculta o botão "Limpar" quando o botão é clicado e todas as pizzas são removidas
        limparBotao.style.display = 'none';
    });

    // Função para atualizar o total exibido no footer
    function atualizarTotal() {
        var totalTexto = '';
        for (var pizzaId in pizzasSelecionadas) {
            if (pizzasSelecionadas.hasOwnProperty(pizzaId)) {
                var pizza = pizzasSelecionadas[pizzaId];
                if (pizza.tamanho && pizza.quantidade) {
                    totalTexto += pizza.tamanho + ' - ' + pizza.quantidade + ' pizza(s) - ' + pizzaId + '<br>';
                }
            }
        }
        if (totalTexto === '') {
            totalTexto = 'Nenhuma pizza selecionada';
        }
        document.querySelector('footer h4').innerHTML = totalTexto;
    }
});