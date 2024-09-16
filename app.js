// Variável para controlar se o sorteio já foi realizado
let sorteioRealizado = false;

function sortear() {
    // Obtém os valores de entrada
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];
    
    // Verifica se os campos foram preenchidos
    if (!quantidade || !de || !ate) {
        alert('Você precisa informar valores em todos os campos.');
        return;
    }
    
    // Verifica se a quantidade informada é válida
    if (quantidade >= (ate - de + 1)) {
        alert('Você precisa informar nos campos "Quantidade de números" e "Do número", valores menores que no campo "Até o número".');
        return;
    }
    
    // Realiza o sorteio dos números
    for (let i = 0; i < quantidade; i++) {
        let sorteio = getRandomIntInclusive(de, ate);
        while (numerosSorteados.includes(sorteio)) {
            sorteio = getRandomIntInclusive(de, ate);
        }
        numerosSorteados.push(sorteio);
    }

// Função para que o número gerado seja inteiro
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
                
    // Exibe os números sorteados
    let textoNumerosSorteados = document.getElementById('resultado');
    if (numerosSorteados.length > 1) {
        textoNumerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}.</label>`;
    } else {
        textoNumerosSorteados.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${numerosSorteados}.</label>`;
    }
                
    // Atualiza o status do botao reiniciar
    sorteioRealizado = true;
    trocarStatusBotao();

}

// Função para trocar o status do botão reiniciar
function trocarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (sorteioRealizado) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    sorteioRealizado = false;
    trocarStatusBotao();

}