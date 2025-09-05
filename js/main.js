// Scroll suave com offset (navbar sticky)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    const offset = 100;

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
        { nome: "Lando Norris", img: "img/pilotos/mclaren/norris.png", info: "FAZER INFO." },
        { nome: "Oscar Piastri", img: "img/pilotos/mclaren/oscarpiastri.png", info: "FAZER INFO." }
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
  card.addEventListener('mouseenter', () => {
    cardsEquipe.forEach(c => {
      if (c !== card) c.style.filter = 'blur(3px) brightness(0.7)';
    });
  });

  card.addEventListener('mouseleave', () => {
    cardsEquipe.forEach(c => c.style.filter = '');
  });

  card.addEventListener('click', () => {
    const equipeKey = card.dataset.equipe;
    const equipe = equipesDados[equipeKey];
    if (!equipe) return;

    equipesGrid.classList.add('dim');
    detalheEquipe.style.display = 'flex';
    detalheEquipe.innerHTML = `
      <button class="voltar-btn">← Voltar</button>
      <div class="equipe-info-box">
        <h3>${equipe.nome}</h3>
        <p>História da equipe será inserida aqui futuramente.</p>
      </div>
      <div class="pilotos-container">
        ${equipe.pilotos.map((piloto, index) => `
          <div class="piloto-card" data-index="${index}" data-equipe="${equipeKey}">
            <img src="${piloto.img}" alt="${piloto.nome}">
            <h4>${piloto.nome}</h4>
          </div>
        `).join('')}
      </div>
    `;

    detalheEquipe.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Evento de voltar
    detalheEquipe.querySelector('.voltar-btn').addEventListener('click', () => {
      detalheEquipe.style.display = 'none';
      equipesGrid.classList.remove('dim');
    });

    // Evento de clique nos pilotos
    const pilotoCards = detalheEquipe.querySelectorAll('.piloto-card');
    pilotoCards.forEach(card => {
      card.addEventListener('click', () => {
        const index = card.dataset.index;
        const equipeKey = card.dataset.equipe;
        const piloto = equipesDados[equipeKey].pilotos[index];
        mostrarSlidePiloto(piloto);
      });
    });
  });
});
function mostrarSlidePiloto(piloto) {
  let slide = document.querySelector('.piloto-detalhe-slide');
  if (slide) slide.remove(); // remove slide anterior

  slide = document.createElement('div');
  slide.classList.add('piloto-detalhe-slide', 'ativo');
  slide.innerHTML = `
    <div class="piloto-info-card">
      <button class="fechar-piloto">×</button>
      <img src="${piloto.img}" alt="${piloto.nome}">
      <h3>${piloto.nome}</h3>
      <p>${piloto.info}</p>
    </div>
  `;
  document.body.appendChild(slide);

  slide.querySelector('.fechar-piloto').addEventListener('click', () => {
    slide.classList.remove('ativo');
    setTimeout(() => slide.remove(), 500);
  });
}
