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
  mercedes: { //editar e criar daqui pra frente
    nome: "Mercedes",
    pilotos: [
      { nome: "Lewis Hamilton", img: "img/mercedes_1.jpg", info: "Sete vezes campeão mundial, lenda viva." },
      { nome: "George Russell", img: "img/mercedes_2.jpg", info: "Talento jovem e promissor." }
    ]
  }
};

// Hover: desfoque os outros cards
cardsEquipe.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cardsEquipe.forEach(c => {
      if (c !== card) c.style.filter = 'blur(3px) brightness(0.7)';
    });
  });

  card.addEventListener('mouseleave', () => {
    cardsEquipe.forEach(c => c.style.filter = '');
  });

  // Clique: mostra detalhe da equipe
  card.addEventListener('click', () => {
    const equipeKey = card.dataset.equipe;
    const equipe = equipesDados[equipeKey];

    // Limpa grid e mostra container de detalhe
    equipesGrid.classList.add('dim');
    detalheEquipe.style.display = 'block';
    pilotosContainer.innerHTML = '';

    equipe.pilotos.forEach(piloto => {
      const cardPiloto = document.createElement('div');
      cardPiloto.classList.add('piloto-card');
      cardPiloto.innerHTML = `
        <img src="${piloto.img}" alt="${piloto.nome}" style="width:100%; border-radius:8px;">
        <h4>${piloto.nome}</h4>
        <p>${piloto.info}</p>
      `;
      pilotosContainer.appendChild(cardPiloto);
    });

    // Scroll suave até a seção de detalhe
    detalheEquipe.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Botão voltar
voltarBtn.addEventListener('click', () => {
  detalheEquipe.style.display = 'none';
  equipesGrid.classList.remove('dim');
});
