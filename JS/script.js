const filmes_database = [
    {
      id: "ac-01",
      titulo: "Vingadores: Ultimato",
      genero: "Ação",
      avaliacao: 8.4,
      stream: "Disney+",
      ano: 2019,
      descricao: "Após os eventos devastadores de Guerra Infinita, os Vingadores remanescentes tentam reverter os danos causados por Thanos.",
    },
    {
      id: "ac-02",
      titulo: "007 - Skyfall",
      genero: "Ação",
      avaliacao: 7.8,
      stream: "Prime Video",
      ano: 2012,
      descricao: "A lealdade de Bond a M é testada quando o passado dela volta para assombrá-la.",
    },
    {
      id: "ac-03",
      titulo: "The Batman",
      genero: "Ação",
      avaliacao: 7.8,
      stream: "Max",
      ano: 2022,
      descricao: "Batman investiga a corrupção oculta em Gotham City e persegue o Charada, um assassino que mira a elite da cidade."
    },
    {
      id: "ac-04",
      titulo: "Bastardos Inglórios",
      genero: "Ação",
      avaliacao: 8.3,
      stream: "Netflix / Prime Video",
      ano: 2009,
      descricao: "Na França ocupada pelos nazistas, um grupo de soldados judeus planeja assassinar os líderes do Terceiro Reich."
    },
    {
      id: "ac-05",
      titulo: "John Wick",
      genero: "Ação",
      avaliacao: 7.4,
      stream: "Prime Video",
      ano: 2014,
      descricao: "Um ex-assassino sai da aposentadoria para caçar os gângsteres que mataram seu cachorro e roubaram seu carro."
    },
    {
      id: "ac-06",
      titulo: "Ritmo de Fuga",
      genero: "Ação",
      avaliacao: 7.6,
      stream: "Netflix",
      ano: 2017,
      descricao: "Um jovem motorista de fuga talentoso confia na batida de sua trilha sonora pessoal para ser o melhor no que faz."
    },
    {
      id: "ac-07",
      titulo: "Resgate",
      genero: "Ação",
      avaliacao: 6.8,
      stream: "Netflix",
      ano: 2020,
      descricao: "Um mercenário do mercado negro embarca em uma missão mortal para resgatar o filho sequestrado de um lorde do crime."
    },
    {
      id: "ac-08",
      titulo: "Top Gun: Maverick",
      genero: "Ação",
      avaliacao: 8.2,
      stream: "Paramount+ / Netflix",
      ano: 2022,
      descricao: "Após trinta anos de serviço, Maverick treina um grupo de graduados para uma missão especializada e perigosa."
    },
    {
      id: "su-01",
      titulo: "Se7en",
      genero: "Suspense",
      avaliacao: 8.6,
      stream: "Max",
      ano: 1995,
      descricao: "Dois detetives caçam um assassino em série que usa os sete pecados capitais como motivo para seus crimes."
    },
    {
      id: "su-02",
      titulo: "Ilha do Medo",
      genero: "Suspense",
      avaliacao: 8.2,
      stream: "Netflix",
      ano: 2010,
      descricao: "Um marechal dos EUA investiga o desaparecimento de um assassino que escapou de um hospital psiquiátrico em uma ilha remota."
    },
    {
      id: "su-03",
      titulo: "Os Suspeitos",
      genero: "Suspense",
      avaliacao: 8.5,
      stream: "Prime Video",
      ano: 1995,
      descricao: "O único sobrevivente de um tiroteio em um navio explica os eventos que levaram ao massacre."
    },
    {
      id: "su-04",
      titulo: "Corra!",
      genero: "Suspense",
      avaliacao: 7.8,
      stream: "Prime Video / Netflix",
      ano: 2017,
      descricao: "Um jovem afro-americano visita os pais de sua namorada branca, onde descobre segredos sinistros."
    },
    {
      id: "su-05",
      titulo: "Um Lugar Silencioso",
      genero: "Suspense",
      avaliacao: 7.5,
      stream: "Paramount+",
      ano: 2018,
      descricao: "Uma família precisa viver em silêncio para evitar criaturas que caçam pelo som."
    },
    {
      id: "su-06",
      titulo: "Nós",
      genero: "Suspense",
      avaliacao: 6.8,
      stream: "Prime Video",
      ano: 2019,
      descricao: "As férias de uma família tornam-se um pesadelo quando seus sósias começam a aterrorizá-los."
    },
    {
      id: "su-07",
      titulo: "Pecadores (Seven)",
      genero: "Suspense",
      avaliacao: 8.6,
      stream: "Max",
      ano: 1995,
      descricao: "A caçada brutal de dois policiais por um serial killer meticuloso e simbólico."
    },
    {
      id: "su-08",
      titulo: "O Sexto Sentido",
      genero: "Suspense",
      avaliacao: 8.2,
      stream: "Disney+",
      ano: 1999,
      descricao: "Um psicólogo infantil tenta ajudar um garoto que afirma ver pessoas mortas."
    },
  
    {
      id: "te-01",
      titulo: "Invocação do Mal",
      genero: "Terror",
      avaliacao: 7.5,
      stream: "Max",
      ano: 2013,
      descricao: "Investigadores paranormais trabalham para ajudar uma família aterrorizada por uma presença sombria em sua fazenda."
    },
    {
      id: "te-02",
      titulo: "It: A Coisa",
      genero: "Terror",
      avaliacao: 7.3,
      stream: "Max",
      ano: 2017,
      descricao: "Um grupo de crianças enfrenta seus maiores medos quando um palhaço assassino começa a caçá-los."
    },
    {
      id: "te-03",
      titulo: "A Freira",
      genero: "Terror",
      avaliacao: 5.3,
      stream: "Max",
      ano: 2018,
      descricao: "Um padre e uma noviça investigam o suicídio de uma freira em um convento na Romênia."
    },
    {
      id: "te-04",
      titulo: "Atividade Paranormal",
      genero: "Terror",
      avaliacao: 6.3,
      stream: "Netflix / Paramount+",
      ano: 2007,
      descricao: "Um jovem casal se muda para uma casa nova e fica cada vez mais perturbado por uma presença sobrenatural."
    },
    {
      id: "te-05",
      titulo: "A Bruxa de Blair",
      genero: "Terror",
      avaliacao: 6.5,
      stream: "Prime Video",
      ano: 1999,
      descricao: "Três estudantes de cinema desaparecem após entrarem em uma floresta para filmar um documentário sobre uma lenda local."
    },
    {
      id: "te-06",
      titulo: "A Bruxa",
      genero: "Terror",
      avaliacao: 7.0,
      stream: "Netflix",
      ano: 2015,
      descricao: "Na Nova Inglaterra de 1630, uma família é destruída por forças de bruxaria e possessão."
    },
    {
      id: "te-07",
      titulo: "Halloween",
      genero: "Terror",
      avaliacao: 7.7,
      stream: "Prime Video",
      ano: 1978,
      descricao: "Quinze anos após assassinar sua irmã, Michael Myers escapa do hospital psiquiátrico e retorna para matar novamente."
    },
    {
      id: "te-08",
      titulo: "Pânico VI",
      genero: "Terror",
      avaliacao: 6.5,
      stream: "Netflix / Paramount+",
      ano: 2023,
      descricao: "Os sobreviventes dos assassinatos de Ghostface deixam Woodsboro para trás e iniciam um novo capítulo em Nova York."
    },
    {
      id: "co-01",
      titulo: "As Branquelas",
      genero: "Comédia",
      avaliacao: 5.7,
      stream: "Netflix",
      ano: 2004,
      descricao: "Dois agentes do FBI se disfarçam de mulheres ricas para proteger herdeiras de um sequestro."
    },
    {
      id: "co-02",
      titulo: "Deadpool",
      genero: "Comédia",
      avaliacao: 8.0,
      stream: "Disney+",
      ano: 2016,
      descricao: "Um mercenário tagarela com fator de cura acelerado busca vingança contra o homem que destruiu sua aparência."
    },
    {
      id: "co-03",
      titulo: "Gente Grande",
      genero: "Comédia",
      avaliacao: 5.9,
      stream: "Netflix",
      ano: 2010,
      descricao: "Cinco amigos de infância se reúnem após anos para o funeral de seu treinador de basquete."
    },
    {
      id: "co-04",
      titulo: "Trem Bala",
      genero: "Comédia",
      avaliacao: 7.3,
      stream: "Prime Video",
      ano: 2022,
      descricao: "Cinco assassinos a bordo de um trem-bala em movimento descobrem que suas missões têm algo em comum."
    },
    {
      id: "co-05",
      titulo: "Se Beber, Não Case!",
      genero: "Comédia",
      avaliacao: 7.7,
      stream: "Max",
      ano: 2009,
      descricao: "Três amigos acordam de uma despedida de solteiro em Las Vegas sem memória da noite anterior e sem o noivo."
    },
    {
      id: "co-06",
      titulo: "Todo Mundo em Pânico",
      genero: "Comédia",
      avaliacao: 6.3,
      stream: "Prime Video",
      ano: 2000,
      descricao: "Uma paródia dos filmes de terror slasher dos anos 90, focada em um grupo de adolescentes perseguidos."
    },
    {
      id: "co-07",
      titulo: "Bad Boys",
      genero: "Comédia",
      avaliacao: 6.8,
      stream: "Netflix",
      ano: 1995,
      descricao: "Dois detetives de Miami protegem uma testemunha de um crime enquanto investigam o roubo de heroína da delegacia."
    },
    {
      id: "co-08",
      titulo: "Jumanji: Bem-vindo à Selva",
      genero: "Comédia",
      avaliacao: 7.0,
      stream: "Netflix",
      ano: 2017,
      descricao: "Quatro adolescentes são sugados para dentro de um videogame mágico e precisam vencer o jogo para sobreviver."
    },
    {
      id: "ro-01",
      titulo: "Como Perder um Homem em 10 Dias",
      genero: "Romance",
      avaliacao: 6.5,
      stream: "Netflix",
      ano: 2003,
      descricao: "Uma jornalista tenta afastar um homem para uma matéria, enquanto ele aposta que pode fazê-la se apaixonar por ele."
    },
    {
      id: "ro-02",
      titulo: "10 Coisas que Eu Odeio em Você",
      genero: "Romance",
      avaliacao: 7.3,
      stream: "Disney+",
      ano: 1999,
      descricao: "Um jovem tenta conquistar uma garota difícil para que seu amigo possa sair com a irmã dela."
    },
    {
      id: "ro-03",
      titulo: "Diário de uma Paixão",
      genero: "Romance",
      avaliacao: 7.8,
      stream: "Max",
      ano: 2004,
      descricao: "A história de amor épica entre um jovem operário e uma garota rica contada através de um diário."
    },
    {
      id: "ro-04",
      titulo: "Questão de Tempo",
      genero: "Romance",
      avaliacao: 7.8,
      stream: "Prime Video",
      ano: 2013,
      descricao: "Aos 21 anos, Tim descobre que pode viajar no tempo e decide usar esse dom para conquistar o amor de sua vida."
    },
    {
      id: "ro-05",
      titulo: "Orgulho e Preceito",
      genero: "Romance",
      avaliacao: 7.8,
      stream: "Netflix",
      ano: 2005,
      descricao: "As vidas de cinco irmãs mudam quando um homem rico e seu amigo Sr. Darcy chegam à vizinhança."
    },
    {
      id: "ro-06",
      titulo: "La La Land",
      genero: "Romance",
      avaliacao: 8.0,
      stream: "Prime Video",
      ano: 2016,
      descricao: "Um pianista de jazz e uma aspirante a atriz se apaixonam enquanto perseguem seus sonhos em Los Angeles."
    },
    {
      id: "ro-07",
      titulo: "Simplesmente Acontece",
      genero: "Romance",
      avaliacao: 7.0,
      stream: "Prime Video",
      ano: 2014,
      descricao: "Melhores amigos desde a infância, Rosie e Alex lidam com as voltas do destino que os mantêm separados."
    },
    {
      id: "ro-08",
      titulo: "Como Eu Era Antes de Você",
      genero: "Romance",
      avaliacao: 7.4,
      stream: "Prime Video",
      ano: 2016,
      descricao: "Uma jovem alegre torna-se cuidadora de um homem rico e paralisado, mudando a vida de ambos."
    },
    {
      id: "fc-01",
      titulo: "O Projeto Adam",
      genero: "Ficção Científica",
      avaliacao: 6.7,
      stream: "Netflix",
      ano: 2022,
      descricao: "Um piloto que viaja no tempo se une ao seu 'eu' mais jovem e ao seu falecido pai para salvar o futuro."
    },
    {
      id: "fc-02",
      titulo: "Duna",
      genero: "Ficção Científica",
      avaliacao: 8.0,
      stream: "Max",
      ano: 2021,
      descricao: "O filho de uma família nobre é encarregado de proteger o recurso mais valioso da galáxia em um planeta deserto."
    },
    {
      id: "fc-03",
      titulo: "Interestelar",
      genero: "Ficção Científica",
      avaliacao: 8.7,
      stream: "Max / Prime Video",
      ano: 2014,
      descricao: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade."
    },
    {
      id: "fc-04",
      titulo: "Star Wars: Episódio III - A Vingança dos Sith",
      genero: "Ficção Científica",
      avaliacao: 7.6,
      stream: "Disney+",
      ano: 2005,
      descricao: "Anakin Skywalker é seduzido pelo lado sombrio da Força enquanto a República se desintegra."
    },
    {
      id: "fc-05",
      titulo: "De Volta para o Futuro",
      genero: "Ficção Científica",
      avaliacao: 8.5,
      stream: "Prime Video / Netflix",
      ano: 1985,
      descricao: "Um adolescente viaja acidentalmente para 1955 em uma máquina do tempo criada por um cientista excêntrico."
    },
    {
      id: "fc-06",
      titulo: "Mad Max: Estrada da Fúria",
      genero: "Ficção Científica",
      avaliacao: 8.1,
      stream: "Max",
      ano: 2015,
      descricao: "Em um futuro pós-apocalíptico, uma mulher se rebela contra um governante tirano com a ajuda de um andarilho."
    },
    {
      id: "fc-07",
      titulo: "Jurassic World",
      genero: "Ficção Científica",
      avaliacao: 6.9,
      stream: "Prime Video",
      ano: 2015,
      descricao: "Um novo parque temático de dinossauros enfrenta o caos quando uma criatura geneticamente modificada escapa."
    },
    {
      id: "fc-08",
      titulo: "Jogador Nº 1",
      genero: "Ficção Científica",
      avaliacao: 7.4,
      stream: "Max",
      ano: 2018,
      descricao: "Em um futuro onde o mundo está em crise, as pessoas buscam refúgio em um universo de realidade virtual chamado OASIS."
    }
];
function distribuirFilmesPorFileira(){
    const fileiras = document.querySelectorAll('.container-filmes');
    fileiras.forEach(fileira => {
        const generoDaFileira = fileira.getAttribute('data-genero');
        const filmesDoGenero = filmes_database.filter(filme => filme.genero === generoDaFileira);
        fileira.innerHTML = "";
        filmesDoGenero.forEach(filme => {
            const caminhoDaImagem = `images/${filme.genero}/${filme.id}.webp`;
            const cardHtml = `
            <div class="card-filme" onclick="irParaDetalhes(${filme.id})">
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
