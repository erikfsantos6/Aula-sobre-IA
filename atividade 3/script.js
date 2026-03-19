function calcularMedia() {
    // 1. Pegar valores e converter para float
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);

    // Elementos do HTML para exibição
    const resultDiv = document.getElementById('result');
    const averageValueSpan = document.getElementById('averageValue');
    const statusBoxDiv = document.getElementById('statusBox');
    const messageP = document.getElementById('resultMessage');

    // Elementos de Animação
    const animReprovado = document.getElementById('animation-reprovado');
    const animAprovado = document.getElementById('animation-aprovado');

    // Certifique-se de fechar qualquer animação anterior
    fecharAnimacoes();

    // 2. Validação Simples: Verifique se todas as notas foram preenchidas
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultDiv.classList.remove('visible'); // Esconde o resultado padrão se der erro
        alert("Por favor, insira as três notas.");
        return;
    }

    // 3. Cálculo da Média
    const average = (n1 + n2 + n3) / 3;
    // Mostra a média com 1 casa decimal (ex: 7.5)
    averageValueSpan.textContent = average.toFixed(1);

    // Limpa classes anteriores do status box
    statusBoxDiv.classList.remove('passed', 'failed');

    // 4. Verificação Principal (Menor que 7 é Reprovado)
    if (average < 7) {
        // --- REPROVADO (Gojo) ---
        
        // Atualiza o painel de resultado padrão (caso o usuário feche a animação)
        statusBoxDiv.textContent = "REPROVADO";
        statusBoxDiv.classList.add('failed');
        messageP.textContent = "Seu desempenho está abaixo do potencial mínimo exigido.";

        // Mostra a Animação do Gojo
        animReprovado.classList.remove('hidden');

    } else {
        // --- APROVADO (Sukuna) ---
        
        // Atualiza o painel de resultado padrão
        statusBoxDiv.textContent = "APROVADO";
        statusBoxDiv.classList.add('passed');
        messageP.textContent = "Seu potencial de feiticeiro foi confirmado.";

        // Mostra a Animação do Sukuna
        animAprovado.classList.remove('hidden');
    }

    // 5. Mostra também o painel de resultado padrão por baixo
    resultDiv.classList.add('visible');
}

// Função para esconder os painéis de animação
function fecharAnimacoes() {
    const animReprovado = document.getElementById('animation-reprovado');
    const animAprovado = document.getElementById('animation-aprovado');
    
    animReprovado.classList.add('hidden');
    animAprovado.classList.add('hidden');
}