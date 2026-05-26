
const parametrosUrl = new URLSearchParams(window.location.search);
const idDoFilme = parametrosUrl.get('id');

const filmeSelecionado = filmes_database.find(filme => filme.id === idDoFilme);

if (filmeSelecionado) {
    
    document.getElementById('detalhe-titulo').innerText = filmeSelecionado.titulo;
    document.getElementById('detalhe-genero').innerText = filmeSelecionado.genero;
    document.getElementById('detalhe-avaliacao').innerText = filmeSelecionado.avaliacao;
    document.getElementById('detalhe-ano').innerText = filmeSelecionado.ano;
    document.getElementById('detalhe-stream').innerText = filmeSelecionado.stream;
    document.getElementById('detalhe-descricao').innerText = filmeSelecionado.descricao;

    const imagemElemento = document.getElementById('detalhe-capa');
    imagemElemento.src = `images/${filmeSelecionado.genero}/${filmeSelecionado.id}.webp`;
    imagemElemento.alt = `Capa do filme ${filmeSelecionado.titulo}`;

} else {
    document.querySelector('.row').innerHTML = `
        <div class="col-12 text-center py-5">
            <h2 class="text-danger">Filme não encontrado!</h2>
            <p>Ocorreu um erro ao buscar os detalhes deste filme.</p>
        </div>
    `;
}