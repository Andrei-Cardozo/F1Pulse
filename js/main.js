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