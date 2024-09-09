// Obtém o campo de pesquisa, botão e a mensagem de erro
const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisar = document.getElementById('botao-pesquisar');
const mensagemErro = document.getElementById('mensagem-erro');

// Obtém todos os itens de resultado (filmes)
const itensResultado = document.querySelectorAll('.item-resultado');

// Função para filtrar os filmes
function filtrarFilmes() {
    const termoPesquisa = campoPesquisa.value.toLowerCase(); // Converte o termo para minúsculas
    let algumResultado = false; // Variável para verificar se houve algum resultado

    itensResultado.forEach(item => {
        const tituloFilme = item.querySelector('h2').innerText.toLowerCase();
        if (tituloFilme.includes(termoPesquisa)) {
            item.style.display = 'block'; // Mostra o item se o título corresponder
            algumResultado = true; // Indica que houve um resultado
        } else {
            item.style.display = 'none'; // Oculta o item se não corresponder
        }
    });

    // Se nenhum resultado for encontrado, exibe a mensagem de erro
    if (!algumResultado) {
        mensagemErro.style.display = 'block';
    } else {
        mensagemErro.style.display = 'none'; // Oculta a mensagem de erro se houver resultados
    }
}

// Adiciona um ouvinte de clique ao botão de pesquisa
botaoPesquisar.addEventListener('click', filtrarFilmes);
