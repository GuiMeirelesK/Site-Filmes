
function distribuirFilmesPorFileira(){
    const fileiras = document.querySelectorAll('.container-filmes');
    fileiras.forEach(fileira => {
        const generoDaFileira = fileira.getAttribute('data-genero');
        const filmesDoGenero = filmes_database.filter(filme => filme.genero === generoDaFileira);
        fileira.innerHTML = "";
        filmesDoGenero.forEach(filme => {
            const caminhoDaImagem = `images/${filme.genero}/${filme.id}.webp`;
            const cardHtml = `
            <div class="card-filme m-2" onclick="window.location.href='detalhes.html?id=${filme.id}'">
                <img src="${caminhoDaImagem}" alt="${filme.titulo}">
                <h3 class="titulo-filme">${filme.titulo}</h3>
            </div>
        `;
        fileira.innerHTML += cardHtml;
        });
    });
}
distribuirFilmesPorFileira();
const botoesGenero = document.querySelectorAll('.botao-genero');
const secoesFileiras = document.querySelectorAll('.fileira-filmes');
botoesGenero.forEach(botao => {
    botao.addEventListener('click', () => {
        const generoClicado = botao.innerText.trim();
        secoesFileiras.forEach(secao => {
            const tituloSecao = secao.querySelector('.titulo-genero').innerText.trim();
            if (tituloSecao.toUpperCase() === generoClicado.toUpperCase()) {
                secao.style.display = 'block';
            } else {
                secao.style.display = 'none';
            }
        });
    });
});
const barraPesquisa = document.querySelector('.input-pesquisa');
barraPesquisa.addEventListener('input', (evento) => {
    const termoDigitado = evento.target.value.toLowerCase();
    const todosOsCards = document.querySelectorAll('.card-filme');
    todosOsCards.forEach(card => {
        const tituloDoFilmeNoCard = card.querySelector('.titulo-filme').innerText.toLowerCase();
        if (tituloDoFilmeNoCard.includes(termoDigitado)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

