// Scroll suave com offset (navbar sticky)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    const offset = 80;

    if (section) {
      const topPos = section.offsetTop - offset;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  });
});

// CARROSSEL HERO
const hero = document.querySelector('.hero');

// Lista de imagens por equipe 
const heroImages = [
  'img/equipes/ferrari/ferrari1.jpg',
  'img/equipes/ferrari/ferrari2.jpg',
  'img/equipes/ferrari/ferrari3.jpg',
  'img/equipes/mclaren/mclaren1.jpg',
  'img/equipes/mclaren/mclaren2.jpg',
  'img/equipes/mclaren/mclaren3.jpg',
  'img/equipes/redbull/redbull1.jpg',
  'img/equipes/redbull/redbull2.jpg',
  'img/equipes/redbull/redbull3.png',
  'img/equipes/mercedes/mercedes1.jpg',
  'img/equipes/mercedes/mercedes2.jpg',
  'img/equipes/mercedes/mercedes3.png',
  'img/equipes/rbVisa/racingbulls1.jpg',
  'img/equipes/rbVisa/racingbulls2.jpg',
  'img/equipes/rbVisa/racingbulls3.jpeg',
  'img/equipes/astonMartin/astonmartin1.jpg',
  'img/equipes/astonMartin/astonmartin2.jpg',
  'img/equipes/astonMartin/astonmartin3.jpg',
  'img/equipes/alpine/alpine1.jpg',
  'img/equipes/alpine/alpine2.jpg',
  'img/equipes/alpine/alpine3.jpg',
  'img/equipes/sauber/sauber1.jpg',
  'img/equipes/sauber/sauber2.jpg',
  'img/equipes/sauber/sauber3.jpg',
  'img/equipes/haas/haas1.png',
  'img/equipes/haas/haas2.jpg',
  'img/equipes/haas/haas3.jpg',
  'img/equipes/willians/willians1.jpg',
  'img/equipes/willians/willians2.jpg',
  'img/equipes/willians/willians3.jpg'
];

let currentHeroIndex = 0;

// Função para trocar o background
function changeHeroBackground() {
  hero.style.backgroundImage = `url(${heroImages[currentHeroIndex]})`;
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
}

// Troca inicial
changeHeroBackground();

// Intervalo para animar cada 3 segundos
setInterval(changeHeroBackground, 3000);


// ======= SEÇÃO EQUIPES DINÂMICA =======
const cardsEquipe = document.querySelectorAll('.card-equipe');
const equipesGrid = document.querySelector('.equipes-grid');
const detalheEquipe = document.getElementById('equipe-detalhe');
const pilotosContainer = detalheEquipe.querySelector('.pilotos-container');
const voltarBtn = detalheEquipe.querySelector('.voltar-btn');

const equipeInfoBox = document.createElement('div');
equipeInfoBox.classList.add('info-equipe');
detalheEquipe.insertBefore(equipeInfoBox, pilotosContainer);

const pilotoDetalheSlide = document.createElement('div');
pilotoDetalheSlide.classList.add('piloto-detalhe-slide');
detalheEquipe.appendChild(pilotoDetalheSlide);

// Dados das equipes
const equipesDados = {
  ferrari: {
    nome: "Ferrari",
    pilotos: [
      { nome: "Charles Leclerc", img: "img/pilotos/ferrari/cleclerc.png", info: "FAZER INFO." },
      { nome: "Lewis Hamilton", img: "img/pilotos/ferrari/lewham.png", info: "FAZER INFO." }
    ]
  },
  redbull: {
    nome: "Red Bull",
    pilotos: [
      { nome: "Max Verstappen", img: "img/pilotos/redbull/maxver.png", info: "FAZER INFO." },
      { nome: "Yuki Tsunoda", img: "img/pilotos/redbull/tsunoda.png", info: "FAZER INFO." }
    ]
  },
  mercedes: {
    nome: "Mercedes",
    pilotos: [
      { nome: "Kimi A. Antonelli", img: "img/pilotos/mercedes/kantonelli.png", info: "FAZER INFO." },
      { nome: "George Russell", img: "img/pilotos/mercedes/grussel.png", info: "FAZER INFO." }
    ]
  },
  alpine: {
    nome: "Alpine",
    pilotos: [
        { nome: "Franco Colapinto", img: "img/pilotos/alpine/colapinto.png", info: "FAZER INFO." },
        { nome: "Pierre Gasly", img: "img/pilotos/alpine/pgasly.png", info: "FAZER INFO." }
    ]
  },
  astonMartin: {
    nome: "Aston Martin",
    pilotos: [
        { nome: "Fernando Alonso", img: "img/pilotos/astonMartin/falonso.png", info: "FAZER INFO." },
        { nome: "Lance Stroll", img: "img/pilotos/astonMartin/lstroll.png", info: "FAZER INFO." }
    ]
  },
  haas: {
    nome: "Haas",
    pilotos: [
        { nome: "Estaban Ocon", img: "img/pilotos/haas/eocon.png", info: "FAZER INFO." },
        { nome: "Oliver Bearman", img: "img/pilotos/haas/obearman.png", info: "FAZER INFO." }
    ]
  },
  mclaren: {
    nome: "McLaren",
    pilotos: [
        { nome: "Lando Norris", img: "img/pilotos/mclaren/norris.png", info: "Lando Norris, nascido em 13 de novembro de 1999, é piloto da Fórmula 1 pela McLaren, vice-campeão mundial de 2024 e vencedor de nove Grandes Prêmios até 2025. Filho de pai inglês e mãe belga, começou no kart aos oito anos, conquistando títulos como o Campeonato Mundial de Kart de 2014. Seguiu para as categorias de base, vencendo Fórmula MSA, Toyota Racing Series, Fórmula Renault Eurocup e NEC, e o Campeonato Europeu de Fórmula 3. Vice-campeão da Fórmula 2 em 2018, ingressou no programa de jovens pilotos da McLaren em 2017, estreando na F1 em 2019. Conquistou seu primeiro pódio e volta mais rápida em 2020, primeira pole em 2021 e sua primeira vitória no GP de Miami em 2024, terminando o ano como vice-campeão. Em 2025, venceu cinco corridas, incluindo o GP da Grã-Bretanha, e travou uma disputa pelo título com Oscar Piastri. Até 2025, soma nove vitórias, 13 poles, 18 voltas mais rápidas e 39 pódios na F1, com contrato até 2027. Norris tem cidadania britânica e belga, estudou física e matemática de forma particular e se inspirou em Valentino Rossi para seguir carreira no automobilismo." },
        { nome: "Oscar Piastri", img: "img/pilotos/mclaren/oscarpiastri.png", info:"Oscar Jack Piastri, nascido em 6 de abril de 2001 em Melbourne, Austrália, é piloto australiano da Fórmula 1 pela McLaren, com nove vitórias em três temporadas até 2025. Começou correndo com carros de controle remoto aos seis anos, passou para o kart aos 10, vencendo vários campeonatos estaduais e nacionais. Migrou para a Europa em 2015 para competir em kart internacionalmente e, a partir de 2016, estreou nas fórmulas juniores, conquistando Fórmula Renault Eurocup (2019), Fórmula 3 da FIA (2020) e Fórmula 2 da FIA (2021), tornando-se o único piloto a vencer três campeonatos consecutivos em categorias de base. Membro da Alpine Academy (2020–2022), assinou com a McLaren em 2023, após disputa contratual com a Alpine, tornando-se parceiro de Lando Norris. Estreou na F1 no GP do Bahrein de 2023, conquistou seu primeiro pódio no GP do Japão e sua primeira vitória na Hungria em 2024, repetindo o feito no Azerbaijão. Em 2025, conquistou mais sete vitórias, cinco poles e oito voltas mais rápidas, travando batalha pelo título com Norris. Até o GP da Itália de 2025, soma nove vitórias, cinco poles, oito voltas mais rápidas e 24 pódios na F1, com contrato com a McLaren até pelo menos 2028. Reconhecido por sua calma sob pressão, adaptabilidade e capacidade de aprendizado rápido, Piastri é comparado a Max Verstappen e Alain Prost, sendo considerado um competidor mentalmente forte e estratégico." }
    ]
  },
  rbVisa: {
    nome: "Racing Bulls",
    pilotos: [
        { nome: "Isack Hadjar", img: "img/pilotos/rbVisa/hadjar.png", info: "FAZER INFO." },
        { nome: "Liam Lawson", img: "img/pilotos/rbVisa/lawson.png", info: "FAZER INFO." }
    ]
  },
  sauber: {
    nome: "Stake F1 Kick Sauber",
    pilotos: [
        { nome: "Gabriel Bortoleto", img: "img/pilotos/sauber/gbortoleto.png", info: "FAZER INFO." },
        { nome: "Nico Hulkenberg", img: "img/pilotos/sauber/nicohulk.png", info: "FAZER INFO." }
    ]
  }, 
  willians: {
    nome: "Atlassian Willians",
    pilotos: [
        { nome: "Alex Albon", img: "img/pilotos/willians/aalbon.png", info: "FAZER INFO." },
        { nome: "Carlos Sainz", img: "img/pilotos/willians/csainz.png", info: "FAZER INFO." }
    ]
  }
};


cardsEquipe.forEach(card => {
  card.addEventListener('click', () => {
    const equipeKey = card.dataset.equipe;
    const equipe = equipesDados[equipeKey];
    if (!equipe) return;

    // Blur nas outras equipes
    cardsEquipe.forEach(c => c.style.filter = (c === card ? '' : 'blur(3px) brightness(0.7)'));

    // Mostrar seção de detalhes
    detalheEquipe.style.display = 'flex';
    detalheEquipe.innerHTML = `
      <div class="info-esquerda" id="historia-container">
        <h3 id="titulo-historia">${equipe.nome}</h3>
        <h4 id="subtitulo-piloto" class="hidden"></h4>
        <p id="historia-texto">${equipe.historia || "História da equipe será inserida aqui."}</p>
        <button id="btn-voltar-historia" class="voltar-btn hidden">← Voltar à história da equipe</button>
      </div>

      <div class="box-lateral-direita">
        <h4 class="titulo-pilotos">Pilotos da equipe</h4>
        <div class="cards-pilotos">
          ${equipe.pilotos.map((p, i) => `
            <div class="piloto-card" data-index="${i}">
              <img src="${p.img}" alt="${p.nome}">
              <h5>${p.nome}</h5>
              <p class="mais-info" style="color:grey">Clique aqui para mais info</p>
            </div>
          `).join('')}
        </div>
      </div>

      <button id="voltar-equipe-lista" class="voltar-btn">← Voltar</button>
    `;

    // Elementos da info
    const tituloHistoria = detalheEquipe.querySelector('#titulo-historia');
    const subtituloPiloto = detalheEquipe.querySelector('#subtitulo-piloto');
    const historiaTexto = detalheEquipe.querySelector('#historia-texto');
    const btnVoltarHistoria = detalheEquipe.querySelector('#btn-voltar-historia');
    const cardsPilotos = detalheEquipe.querySelectorAll('.piloto-card');
    const voltarBtnEquipe = detalheEquipe.querySelector('#voltar-equipe-lista');

    // Evento nos cards dos pilotos
    cardsPilotos.forEach(cardPiloto => {
      cardPiloto.addEventListener('click', () => {
        // Destacar piloto
        cardsPilotos.forEach(c => c.classList.remove('selecionado'));
        cardPiloto.classList.add('selecionado');

        const piloto = equipe.pilotos[cardPiloto.dataset.index];

        // Atualizar conteúdo da história
        subtituloPiloto.textContent = piloto.nome;
        subtituloPiloto.classList.remove('hidden');
        historiaTexto.textContent = piloto.info;

        // Mostrar botão de voltar
        btnVoltarHistoria.classList.remove('hidden');
      });
    });

    // Evento no botão de voltar à história da equipe
    btnVoltarHistoria.addEventListener('click', () => {
      // Restaurar texto da equipe
      subtituloPiloto.classList.add('hidden');
      subtituloPiloto.textContent = '';
      historiaTexto.textContent = equipe.historia || "História da equipe será inserida aqui.";

      // Remover seleção de piloto
      cardsPilotos.forEach(c => c.classList.remove('selecionado'));

      // Esconder botão
      btnVoltarHistoria.classList.add('hidden');
    });

    // Botão de voltar geral (lá embaixo)
    voltarBtnEquipe.addEventListener('click', () => {
      detalheEquipe.style.display = 'none';
      cardsEquipe.forEach(c => c.style.filter = '');
      const offset = 110;
      const topPos = equipesGrid.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    });

    // Scroll suave para a seção
    const offset = 20;
    const topPos = detalheEquipe.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  });
});
