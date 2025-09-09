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
      { nome: "Charles Leclerc", img: "img/pilotos/ferrari/cleclerc.png", info: "Charles Leclerc, nascido em 16 de outubro de 1997 em Monte Carlo, Mônaco, é piloto da Ferrari na Fórmula 1 desde 2019. Filho do ex-piloto Hervé Leclerc, Charles começou no kart aos 8 anos e passou pelas categorias de base com títulos na GP3 (2016) e Fórmula 2 (2017). Estreou na F1 pela Sauber em 2018, destacando-se rapidamente. Em 2019, conquistou suas primeiras vitórias (Bélgica e Itália), além de sete poles. Apesar das dificuldades da Ferrari em 2020, Leclerc se manteve competitivo. Em 2022, venceu 3 corridas e foi vice-campeão mundial. Em 2024, venceu em Mônaco, Itália e EUA, encerrando a temporada com 13 pódios e o 3º lugar no campeonato. Com contrato renovado até pelo menos 2029, tornou-se o rosto da Ferrari. Fora das pistas, Leclerc é músico, filantropo, empresário (marca de sorvetes LEC) e embaixador de marcas como Puma e Giorgio Armani. Admirador de Ayrton Senna e torcedor do Monaco FC, também é ativo em causas sociais e ambientais, especialmente em Mônaco e na Itália."
 },
      { nome: "Lewis Hamilton", img: "img/pilotos/ferrari/lewham.png", info: "Sir Lewis Hamilton, nascido em 7 de janeiro de 1985, é um piloto britânico heptacampeão mundial de Fórmula 1 (2008, 2014, 2015, 2017, 2018, 2019 e 2020), agora correndo pela Ferrari. Detentor de recordes como maior número de vitórias (105), poles (104), pódios (202) e voltas lideradas (5.486), é considerado um dos maiores nomes da história da F1. Começou no kart aos 8 anos, chamou atenção de Ron Dennis aos 10 e foi contratado pela McLaren aos 13. Estreou na F1 em 2007, sendo vice-campeão logo no primeiro ano e campeão em 2008. Após anos na McLaren, transferiu-se para a Mercedes em 2013, onde dominou a era híbrida. Em 2021 foi nomeado Cavaleiro pela Família Real Britânica, e em 2022, cidadão honorário do Brasil. Fora das pistas, é vegano, ativista por causas sociais e ambientais, músico, empresário, e tutor do famoso buldogue Roscoe. Admirador de Ayrton Senna, Hamilton também é conhecido por sua espiritualidade, estilo marcante e engajamento em movimentos como Black Lives Matter. Em 2018, após intensa disputa com Sebastian Vettel, Hamilton conquistou seu quinto título com 11 vitórias, igualando Juan Manuel Fangio. Em 2019, dominou a temporada e tornou-se hexacampeão nos EUA, pontuando em todas as corridas. Em 2020, ultrapassou o recorde de vitórias de Schumacher e sagrou-se heptacampeão na Turquia. Também recebeu o título de cavaleiro da Ordem do Império Britânico. Em 2021, duelou com Max Verstappen até a última corrida, perdendo o título em Abu Dhabi após decisão polêmica da direção de prova. Em 2022 e 2023, enfrentou dificuldades com o novo regulamento técnico e o conceito de 'zero sidepod' da Mercedes, encerrando ambas as temporadas sem vitórias, mas ainda com grande destaque em pódios e recordes. Em 2024, anunciou saída da Mercedes e encerrou um jejum de quase 3 anos ao vencer em Silverstone, somando 104 vitórias e tornando-se o único piloto a vencer após mais de 300 GPs. Também conquistou o inédito 200º pódio da carreira na Hungria. Venceu novamente na Bélgica após desclassificação de Russell e se despediu da Mercedes com homenagens em Abu Dhabi. Em 2025, iniciou nova fase com a Scuderia Ferrari, ao lado de Charles Leclerc, com contrato confirmado até 2027."
 }
    ]
  },
  redbull: {
    nome: "Red Bull",
    pilotos: [
      { nome: "Max Verstappen", img: "img/pilotos/redbull/maxver.png", info: "Max Verstappen é piloto neerlandês da Red Bull Racing e tetracampeão mundial de Fórmula 1 (2021–2024), com 61 vitórias até o fim de 2025. Estreou na F1 em 2015 pela Toro Rosso, tornando-se o mais jovem piloto e vencedor de um GP. Assumiu a Red Bull em 2016, vencendo já na estreia. Dominou a categoria nos anos seguintes, batendo recordes como o de mais vitórias em uma temporada (15 em 2022) e mais vitórias consecutivas (10 em 2023). Em 2024 enfrentou seu maior jejum de vitórias desde que se tornou campeão, mas recuperou-se e conquistou o tetracampeonato em Las Vegas. Começou 2025 com vitórias no Japão, Emília-Romanha e Itália, além de poles históricas. Fora das pistas, fundou a Verstappen.com Racing, equipe que atua em e-sports e corridas GT. Max é filho do ex-piloto Jos Verstappen e é conhecido pelo estilo agressivo, rivalidades com Hamilton e Norris, e domínio técnico. Contrato com a Red Bull vai até 2028."
 },
      { nome: "Yuki Tsunoda", img: "img/pilotos/redbull/tsunoda.png", info: "Yuki Tsunoda é piloto japonês da Red Bull Racing desde 2025. Estreou na F1 em 2021 pela AlphaTauri e é conhecido por seu estilo agressivo e personalidade intensa. Foi campeão da F4 Japonesa em 2018 e 3º colocado na F2 em 2020. Na F1, teve evolução gradual, tornando-se destaque da RB em 2024 com 30 pontos. Em 2025, assumiu o segundo carro da Red Bull ao lado de Max Verstappen. Fora das pistas, é fã de Senna e Alonso, viveu na Itália para focar na carreira e é reconhecido por seu carisma, humor ácido e dedicação."
 }
    ]
  },
  mercedes: {
    nome: "Mercedes",
    pilotos: [
      { nome: "Kimi A. Antonelli", img: "img/pilotos/mercedes/kantonelli.png", info: "Kimi Antonelli é piloto italiano da Mercedes na F1 desde 2025 e uma das maiores promessas da nova geração. Campeão da F4 Italiana, ADAC F4, FRECA e da Fórmula Regional do Oriente Médio, estreou direto na F2 em 2024 com a Prema. Foi anunciado como substituto de Hamilton na Mercedes e impressionou logo na estreia, pontuando na Austrália e batendo recordes de precocidade. Em 2025, tornou-se o piloto mais jovem a liderar uma corrida, a marcar volta mais rápida e a conquistar uma pole (sprint), além de conquistar seu primeiro pódio no Canadá. É membro da Mercedes Junior Team desde os 13 anos, admirador de Ayrton Senna e corre com o número 12, símbolo histórico do ídolo brasileiro."
 },
      { nome: "George Russell", img: "img/pilotos/mercedes/grussel.png", info:"George Russell é piloto britânico da Mercedes na F1 desde 2022. Campeão da F2 em 2018, estreou na Williams em 2019 e brilhou como substituto de Hamilton na Mercedes em 2020. Conquistou sua primeira vitória em 2022, no GP do Brasil, e virou líder da equipe após a saída de Hamilton. Em 2024, venceu na Áustria e em Las Vegas, superou Hamilton em pontos e classificações, e terminou o ano em 6º no mundial. Conhecido pela consistência, inteligência de corrida e personalidade firme, Russell é apontado como futuro campeão e referência da nova geração da F1."
 }
    ]
  },
  alpine: {
    nome: "Alpine",
    pilotos: [
        { nome: "Franco Colapinto", img: "img/pilotos/alpine/colapinto.png", info: "Franco Alejandro Colapinto é basicamente a nova sensação argentina da Fórmula 1, tipo aquela mistura de talento bruto com história de superação. Nasceu em Pilar, Buenos Aires, em 2003, com sangue italiano e ucraniano, e desde cedo mostrou que o volante era destino — começou no kart aos 9 anos e colecionou títulos até chegar à F1. O detalhe é que ele teve que se mudar para a Europa aos 14 anos, e a família literalmente investiu tudo para que ele tivesse chance de brilhar; o pai chegou a vender a própria casa. Ele passou por todas as categorias de base: F4 Espanhola (campeão em 2019), Fórmula Renault, Fórmula Regional Europeia, Fórmula 3, Fórmula 2 e, finalmente, Fórmula 1. Na F2, suas atuações chamaram atenção e, em 2024, Colapinto fez uma estreia relâmpago na Williams, substituindo Logan Sargeant, marcando pontos logo na primeira corrida. Em 2025, ele entrou na Alpine como piloto reserva e acabou sendo promovido para titular, com estreia em Ímola. Além da pista, ele é torcedor fanático do Boca Juniors e fã do Messi — mas com estilo próprio, sem se deixar levar por comparações. É carismático, ganhou milhões de seguidores de forma meteórica e até teve uma fanpage brasileira dedicada a ele. A personalidade dele, aliada ao talento, já começou a reacender a paixão argentina pela F1, que não via um piloto de lá desde Mazzacane em 2001." },
        { nome: "Pierre Gasly", img: "img/pilotos/alpine/pgasly.png", info: "Pierre Gasly, nascido em Ruão, França, em 7 de fevereiro de 1996, é um piloto de Fórmula 1 atualmente na Alpine. Filho de uma família ligada ao automobilismo, Gasly começou no kart ao lado de Anthoine Hubert e Esteban Ocon, enfrentando desde cedo adversários que também chegariam à F1, como Charles Leclerc e Max Verstappen. Sua carreira em monopostos começou na Fórmula 4 francesa, passando depois para a Fórmula Renault, onde se destacou ao vencer a Eurocopa de 2013. Na Fórmula Renault 3.5 Series, foi vice-campeão em 2014, e na GP2 Series foi campeão em 2016 pela Prema Powerteam. Ainda competiu na Super Fórmula Japonesa, chegando muito perto do título em 2017, e fez uma participação na Fórmula E em 2017, antes de estrear na Fórmula 1. Gasly entrou na F1 em 2017 pela Toro Rosso, alternando entre a equipe principal da Red Bull em 2019 e o retorno à Toro Rosso (AlphaTauri) ainda em 2019, conquistando seu primeiro pódio no GP do Brasil. Em 2020, fez história ao vencer o GP da Itália, marcando a primeira vitória da AlphaTauri e de um francês na F1 desde 1996. Seguiu na AlphaTauri até 2022, mostrando consistência e superando muitas vezes seus companheiros de equipe. Em 2023, Gasly se juntou à Alpine, reencontrando Esteban Ocon. Teve bons resultados, incluindo o pódio no GP de São Paulo, o primeiro com dois franceses desde 1997. Gasly se firmou como principal piloto da Alpine para 2024 e garantiu um contrato multianual até 2025, encerrando a temporada de 2024 na 10ª posição do campeonato, à frente de Ocon e de outros pilotos experientes como Nico Hülkenberg." }
    ]
  },
  astonMartin: {
    nome: "Aston Martin",
    pilotos: [
        { nome: "Fernando Alonso", img: "img/pilotos/astonMartin/falonso.png", info: "Fernando Alonso Díaz, nascido em Oviedo, Espanha, é um piloto bicampeão mundial de Fórmula 1, atualmente na Aston Martin. Começou no kart aos três anos e rapidamente se destacou, conquistando títulos regionais e internacionais. Já na adolescência, competiu em campeonatos de kart europeus e mundiais, enfrentando adversários que também chegariam à F1, como Kimi Räikkönen. Alonso estreou na Fórmula 1 em 2001 pela Minardi e rapidamente se destacou na Renault, conquistando seus dois títulos mundiais em 2005 e 2006, tornando-se o mais jovem campeão da época. Passou por McLaren, Renault (novamente) e Ferrari, acumulando vitórias e pódios, mas também envolvimentos em polêmicas, como o famoso “Crashgate” de Cingapura em 2008 e ordens de equipe na Ferrari. Após retornar à McLaren, Alonso deixou a Fórmula 1 em 2018, mas voltou em 2021 pela Alpine, conquistando pódios e retomando destaque. Em 2023, se juntou à Aston Martin, obtendo oito pódios na temporada e se firmando como um dos pilotos mais experientes e consistentes do grid. Além da F1, Alonso competiu nas 500 Milhas de Indianápolis (2017 e 2019), chegando a liderar a corrida em 2017, e nas 24 Horas de Le Mans, vencendo em 2018 e 2019 e conquistando o título do Mundial de Endurance. Ao longo da carreira, Alonso se destacou pela habilidade, consistência e longevidade no automobilismo, mantendo-se competitivo em diversas equipes e categorias." },
        { nome: "Lance Stroll", img: "img/pilotos/astonMartin/lstroll.png", info: "Nascido em Montreal, Canadá, é piloto da Fórmula 1 pela Aston Martin. Começou no kart aos oito anos e rapidamente avançou nas categorias de base: campeão da Fórmula 4 Italiana em 2014, da Toyota Racing Series em 2015 e da Fórmula 3 Europeia em 2016. Foi membro das academias de pilotos da Ferrari e da Williams, acumulando experiência antes de chegar à F1. Estreou na Fórmula 1 em 2017 pela Williams, conquistando seu primeiro pódio no GP do Azerbaijão, tornando-se o mais jovem estreante a subir no pódio. Em 2019, passou a correr pela Racing Point, equipe adquirida por seu pai Lawrence Stroll, que depois se tornou Aston Martin em 2021. Desde então, tem sido companheiro de equipe de Sebastian Vettel (2021–2022) e Fernando Alonso (2023–atualmente). Na F1, Stroll colecionou momentos de destaque, como sua primeira pole position no GP da Turquia de 2020, mas também críticas sobre consistência e dependência do investimento familiar. Seu melhor ano em termos de campeonato foi 2023, quando terminou em décimo lugar, embora ainda abaixo de Alonso. Em 2024, enfrentou dificuldades com o carro, lesões e incidentes na pista, mas ainda assim conseguiu pontuar em algumas corridas e renovou contrato com a Aston Martin para 2025 e além. Além da F1, Stroll se destaca por ser multilíngue, esportista e de família ligada ao automobilismo, com influência direta de seu pai, bilionário e proprietário da equipe que ele representa." }
    ]
  },
  haas: {
    nome: "Haas",
    pilotos: [
        { nome: "Estaban Ocon", img: "img/pilotos/haas/eocon.png", info: "Esteban Ocon é um piloto francês de Fórmula 1 nascido em Évreux em 1996. Começou no kart aos nove anos, passando por Fórmula Renault, Fórmula 3 Europeia (campeão em 2014) e GP3 Series (campeão em 2015). Ele fez parte do programa de desenvolvimento da Mercedes, sendo piloto reserva da equipe em 2019, antes de retomar sua carreira como titular na F1. Na Fórmula 1, Ocon estreou em 2016 pela Manor, substituindo Rio Haryanto, depois correu pela Force India/Racing Point (2017–2018), enfrentando conflitos com Sergio Pérez e tendo sua vaga ocupada por Lance Stroll em 2019. Foi piloto reserva da Mercedes em 2019, antes de se tornar titular da Renault/Alpine (2020–2024), conquistando sua primeira vitória no GP da Hungria de 2021 e alguns pódios notáveis, incluindo 2023 com o terceiro lugar em Mônaco. Em 2024, apesar de bons resultados como o pódio em São Paulo, a relação com a equipe se deteriorou, e ele foi anunciado para correr pela Haas a partir de 2025, formando dupla com Oliver Bearman. Ocon é conhecido por sua trajetória de superação, vindo de família de classe média, ao contrário de pilotos com apoio financeiro bilionário, e por manter boas relações com alguns colegas da base, como Lance Stroll, enquanto teve rivalidades marcantes, como com Pierre Gasly e Max Verstappen." },
        { nome: "Oliver Bearman", img: "img/pilotos/haas/obearman.png", info: "Oliver Bearman é um piloto britânico nascido em Havering, Londres, em 2005. Começou no kart aos oito anos, conquistando títulos nacionais, europeus e mundiais na categoria júnior. Passou para os monopostos em 2020 na Fórmula 4 italiana e alemã, destacando-se em 2021 ao vencer ambos os campeonatos e se tornar o primeiro piloto a conquistar os dois títulos no mesmo ano. Em seguida, competiu no GB3, Fórmula 3 e Fórmula 2 com a equipe Prema Racing, conseguindo pódios e vitórias, embora tenha enfrentado dificuldades em 2024 por limitações do carro e compromissos com a F1. Bearman é membro da Ferrari Driver Academy, estreando na F1 em 2024 pelo GP da Arábia Saudita, substituindo Carlos Sainz Jr., e depois pela Haas, substituindo Kevin Magnussen no GP do Azerbaijão. Em 2025, Bearman terá sua primeira temporada completa na Fórmula 1 com a Haas, ao lado de Esteban Ocon, conquistando pontos em várias corridas e alcançando sua melhor colocação até agora: sexto lugar no GP dos Países Baixos. Ele se destaca por sua rápida ascensão no automobilismo, habilidade em se adaptar a diferentes categorias e por ser o primeiro estreante a pontuar por duas equipes diferentes em uma mesma temporada." }
    ]
  },
  mclaren: {
    nome: "McLaren",
    pilotos: [
        { nome: "Lando Norris", img: "img/pilotos/mclaren/norris.png", info: "Lando Norris, nascido em 13 de novembro de 1999, é piloto da Fórmula 1 pela McLaren, vice-campeão mundial de 2024 e vencedor de nove Grandes Prêmios até 2025. Filho de pai inglês e mãe belga, começou no kart aos oito anos, conquistando títulos como o Campeonato Mundial de Kart de 2014. Seguiu para as categorias de base, vencendo Fórmula MSA, Toyota Racing Series, Fórmula Renault Eurocup e NEC, e o Campeonato Europeu de Fórmula 3. Vice-campeão da Fórmula 2 em 2018, ingressou no programa de jovens pilotos da McLaren em 2017, estreando na F1 em 2019. Conquistou seu primeiro pódio e volta mais rápida em 2020, primeira pole em 2021 e sua primeira vitória no GP de Miami em 2024, terminando o ano como vice-campeão. Em 2025, venceu cinco corridas, incluindo o GP da Grã-Bretanha, e travou uma disputa pelo título com Oscar Piastri. Até 2025, soma nove vitórias, 13 poles, 18 voltas mais rápidas e 39 pódios na F1, com contrato até 2027. Norris tem cidadania britânica e belga, estudou física e matemática de forma particular e se inspirou em Valentino Rossi para seguir carreira no automobilismo." },
        { nome: "Oscar Piastri", img: "img/pilotos/mclaren/oscarpiastri.png", info: `
           Oscar Jack Piastri, nascido em 6 de abril de 2001 em Melbourne, Austrália, é piloto australiano da Fórmula 1 pela McLaren, com nove vitórias em três temporadas até 2025. Começou correndo com carros de controle remoto aos seis anos, passou para o kart aos 10, vencendo vários campeonatos estaduais e nacionais. Migrou para a Europa em 2015 para competir em kart internacionalmente e, a partir de 2016, estreou nas fórmulas juniores, conquistando Fórmula Renault Eurocup (2019), Fórmula 3 da FIA (2020) e Fórmula 2 da FIA (2021), tornando-se o único piloto a vencer três campeonatos consecutivos em categorias de base. Membro da Alpine Academy (2020–2022), assinou com a McLaren em 2023, após disputa contratual com a Alpine, tornando-se parceiro de Lando Norris. Estreou na F1 no GP do Bahrein de 2023, conquistou seu primeiro pódio no GP do Japão e sua primeira vitória na Hungria em 2024, repetindo o feito no Azerbaijão. Em 2025, conquistou mais sete vitórias, cinco poles e oito voltas mais rápidas, travando batalha pelo título com Norris. Até o GP da Itália de 2025, soma nove vitórias, cinco poles, oito voltas mais rápidas e 24 pódios na F1, com contrato com a McLaren até pelo menos 2028. Reconhecido por sua calma sob pressão, adaptabilidade e capacidade de aprendizado rápido, Piastri é comparado a Max Verstappen e Alain Prost, sendo considerado um competidor mentalmente forte e estratégico.
          ` }
    ]
  },
  rbVisa: {
    nome: "Racing Bulls",
    pilotos: [
        { nome: "Isack Hadjar", img: "img/pilotos/rbVisa/hadjar.png", info: "Isack Hadjar é um piloto franco-argelino nascido em Paris em 2004. Começou no kart em 2015 e conquistou títulos nacionais e europeus na categoria júnior. Passou para os monopostos em 2019 na Fórmula 4 francesa, obtendo vitórias e pódios, e em 2021 foi campeão estreante do Campeonato de Fórmula Regional Europeia, mostrando rápido desenvolvimento nas categorias de base. Hadjar seguiu para a Fórmula 3 FIA em 2022 com a Hitech Grand Prix, conquistando três vitórias e disputando o título até o final. Em 2023 estreou na Fórmula 2 com a Hitech, obtendo vitórias e pódios, e em 2024 competiu pela Campos Racing, sendo vice-campeão após um campeonato muito disputado, com várias vitórias e liderança em diferentes rodadas. Membro do Red Bull Junior Team desde 2022, Hadjar fez treinos livres de Fórmula 1 com AlphaTauri e Red Bull, antes de ser anunciado como piloto titular da Racing Bulls para 2025. Na F1, ele já marcou pontos, conseguiu seu primeiro pódio no GP dos Países Baixos de 2025 e mostrou grande capacidade de adaptação e competitividade nas corridas." },
        { nome: "Liam Lawson", img: "img/pilotos/rbVisa/lawson.png", info: "Liam Lawson é um piloto neozelandês nascido em 2002, membro do Red Bull Junior Team. Começou no kart aos sete anos e rapidamente se destacou em monopostos, conquistando títulos na Fórmula First, F1600 da Nova Zelândia, Toyota Racing Series (2019) e vice-campeonatos em Fórmula 4 e Super Fórmula Japonesa. Na Fórmula 3 FIA, correu de 2019 a 2020, somando vitórias e pódios, e passou para a Fórmula 2 de 2021 a 2022, obtendo vitórias, pódios e terminando entre os melhores colocados. Também competiu no DTM, sendo vice-campeão em 2021. Estreou na Fórmula 1 em 2023 pela AlphaTauri, substituindo Daniel Ricciardo, e em 2024 foi promovido à Red Bull Racing e à Racing Bulls, pontuando em várias corridas. Em 2025, começou a temporada pela Red Bull, mas após duas corridas, retornou à Racing Bulls, tornando-se companheiro de Isack Hadjar." }
    ]
  },
  sauber: {
    nome: "Stake F1 Kick Sauber",
    pilotos: [
        { nome: "Gabriel Bortoleto", img: "img/pilotos/sauber/gbortoleto.png", info: "Gabriel Bortoleto é um dos talentos mais promissores do automobilismo brasileiro, nascido em 2004 em Osasco. Filho de Lincoln Oliveira da Silva, empresário e fã de automobilismo, e irmão do ex-piloto Enzo Bortoleto, Gabriel começou a acelerar aos seis anos no kart, e desde cedo mostrou consistência e talento excepcionais. Ele se mudou para a Itália ainda jovem para seguir a carreira profissional, vivendo em Desenzano del Garda e depois em Milão, onde se firmou como piloto internacional. No kart, brilhou em competições nacionais e internacionais, terminando em terceiro no Mundial e no Europeu de OKJ em 2018, além de vice na WSK Super Master Series. Fez sua estreia em monopostos em 2020 na Fórmula 4 Italiana, conquistando vitórias e pódios e terminando entre os melhores estreantes. Subiu rapidamente para a Fórmula Regional Europeia e Fórmula 3, mostrando evolução contínua. Em 2023, Bortoleto foi absoluto na Fórmula 3 da FIA: venceu na estreia no Barém, dominou o campeonato com vitórias e consistência e se sagrou campeão como estreante. Em 2024, Bortoleto deu outro salto: na Fórmula 2, competiu pela Invicta Racing e se destacou de forma extraordinária. Desde o início, mostrou maturidade e inteligência tática, conquistando poles, pódios e vitórias, incluindo corridas épicas de recuperação do último para o primeiro lugar. A temporada foi marcada por disputas intensas com Isack Hadjar, e Bortoleto terminou campeão da Fórmula 2 como estreante, demonstrando talento bruto, frieza e capacidade de superar adversidades sob pressão. Na Fórmula 1, Bortoleto foi rapidamente reconhecido como promessa: integrou o Programa de Desenvolvimento de Pilotos da McLaren e, em 2025, estreou pela Sauber, escolhendo o icônico número 5. Nas primeiras corridas, enfrentou desafios naturais para um novato — abandonos, colisões e limitações do carro —, mas já mostrou flashes de talento e inteligência de pista, pontuando pela primeira vez no GP da Áustria com um 8º lugar. Gabriel combina agressividade calculada, visão estratégica e maturidade para idade, sendo visto como o próximo grande nome do Brasil na F1." },
        { nome: "Nico Hulkenberg", img: "img/pilotos/sauber/nicohulk.png", info: "Nico Hülkenberg é um dos nomes mais consistentes e respeitados da Fórmula 1, nascido em 1987 em Emmerich am Rhein, Alemanha. Desde cedo mostrou talento no kart, conquistando campeonatos nacionais e rapidamente subindo para as categorias de base europeias. Na Fórmula 3 Euro Series, destacou-se vencendo corridas difíceis e o prestigiado Masters de Fórmula 3, até se consagrar campeão da F3 em 2008. Na GP2, Hülkenberg também brilhou, dominando etapas e conquistando o título com folga, mostrando maturidade e habilidade em ultrapassagens e estratégias de corrida. Estreou na Fórmula 1 em 2010 pela Williams, ao lado de Rubens Barrichello, e logo mostrou sua velocidade ao conquistar a pole position em Interlagos no mesmo ano, embora a vitória não tenha vindo. Passou por equipes como Force India, Sauber, Renault, Racing Point, Aston Martin e Haas, sendo reconhecido por sua consistência, inteligência em corridas e capacidade de extrair o máximo do carro, mesmo em situações difíceis. Em 2015, venceu as 24 Horas de Le Mans, conquistando um marco histórico como piloto de F1 ativo. Apesar de todo o talento, Hülkenberg teve a fama — injusta, mas real — de ser o piloto com mais largadas na F1 sem subir ao pódio, acumulando quase 240 corridas sem alcançar o top 3 até 2025. Esse “jejum” terminou em grande estilo no GP da Grã-Bretanha de 2025, quando finalmente conquistou o terceiro lugar, após anos de batalhas e oportunidades perdidas por pequenos detalhes. Em 2025, Hülkenberg retorna à Sauber (que será a Audi F1 Team em 2026) como piloto titular ao lado do jovem brasileiro Gabriel Bortoleto. Com sua experiência, visão de pista e capacidade de desenvolvimento de carro, Nico é visto como uma âncora de estabilidade e mentor dentro da equipe, enquanto continua provando que, com talento e paciência, a persistência no automobilismo pode finalmente trazer a recompensa merecida." }
    ]
  }, 
  willians: {
    nome: "Atlassian Willians",
    pilotos: [
        { nome: "Alex Albon", img: "img/pilotos/willians/aalbon.png", info: "Alexander Albon é um piloto anglo-tailandês nascido em 1996 em Londres, filho do ex-piloto britânico Nigel Albon. Começou sua carreira no kart e, a partir de 2012, subiu para categorias de monopostos, disputando Fórmula Renault 2.0 e Fórmula 3 Europeia, sem grandes destaques, mas acumulando experiência em competições de alto nível, incluindo o Grande Prêmio de Macau. Em 2016, Albon estreou na GP3 Series pela ART Grand Prix, conquistando quatro vitórias e o vice-campeonato, antes de subir para a Fórmula 2, onde continuou seu desenvolvimento até 2018, transferindo-se para a DAMS. Na Fórmula 1, Albon estreou em 2019 pela Toro Rosso, marcando pontos já no início da temporada e tornando-se o primeiro tailandês a pontuar na categoria desde 1954. Em agosto de 2019, foi promovido à Red Bull para substituir Pierre Gasly, conquistando seu primeiro pódio no Grande Prêmio da Toscana de 2020, tornando-se o primeiro tailandês a subir ao pódio na F1. Em 2022, Albon se juntou à Williams, onde rapidamente se consolidou como piloto titular e confiável. Seu contrato foi renovado em 2022 e novamente em 2024, garantindo sua permanência na equipe até além de 2026. Albon é reconhecido por sua velocidade em condições mistas, consistência em corridas e capacidade de extrair desempenho máximo de carros que nem sempre são competitivos para brigar no pelotão da frente." },
        { nome: "Carlos Sainz", img: "img/pilotos/willians/csainz.png", info: "Carlos Sainz Jr., nascido em 1994 em Madrid, é um piloto espanhol de Fórmula 1, filho do bicampeão mundial de rali Carlos Sainz. Iniciou sua carreira no kart, conquistando títulos internacionais e se destacando em competições europeias. Em 2010, entrou para o programa Red Bull Junior Team e avançou para a Fórmula BMW, GP3 e Fórmula Renault 3.5, onde foi campeão em 2014, superando rivais que também chegariam à F1, como Pierre Gasly e Esteban Ocon. Na Fórmula 1, Sainz estreou em 2015 pela Toro Rosso, formando a dupla mais jovem da temporada com Max Verstappen. Após três anos consistentes na equipe, foi emprestado à Renault em 2017–2018, enfrentando desafios de desempenho e companheiros fortes como Nico Hülkenberg. Em 2019, transferiu-se para a McLaren, conquistando seu primeiro pódio no GP do Brasil e ajudando a equipe a terminar terceira no campeonato de construtores em 2020. Em 2021, Sainz assinou com a Ferrari, onde conseguiu quatro vitórias e várias poles até 2024, incluindo sua primeira vitória na F1 no GP da Grã-Bretanha de 2022. Durante seu período na Ferrari, consolidou-se como piloto rápido, estratégico e consistente, embora muitas vezes ficasse atrás do companheiro Charles Leclerc no campeonato. Em  2025, Sainz se juntou à Williams, formando dupla com Alexander Albon, em contrato de dois anos com opção de extensão. Fora das pistas, é torcedor fanático do Real Madrid, admirador de Fernando Alonso e conhecido por episódios marcantes de personalidade, como recusar autógrafos de jogadores do Barcelona." }
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
// Dados dos pilotos lendários
const pilotosLendarios = {
  senna: {
    nome: "Ayrton Senna",
    img: "img/senna.jpg",
    info: `
      <p>3x Campeão Mundial de F1</p>
      <p>41 vitórias, 65 poles</p>
      <p>História: Ícone brasileiro, conhecido por velocidade, precisão e carisma, dominou os anos 80 e início dos 90.</p>
    `
  },
  schumacher: {
    nome: "Michael Schumacher",
    img: "img/schumacher.jpg",
    info: `
      <p>7x Campeão Mundial de F1</p>
      <p>91 vitórias, 68 poles, 77 voltas rápidas</p>
      <p>História: Dominou a F1 nos anos 90 e 2000, redefinindo o esporte e sendo referência em disciplina e técnica.</p>
    `
  }
  // Adicione outros lendários aqui
};

// Criar modal no body
const modalLendario = document.createElement('div');
modalLendario.classList.add('modal-lendario');
document.body.appendChild(modalLendario);

// Seleciona todos os cards de pilotos lendários
const cardsLendarios = document.querySelectorAll('.lendas-container .card-equipe');

cardsLendarios.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.lenda;
    const piloto = pilotosLendarios[key];
    if (!piloto) return;

    modalLendario.innerHTML = `
      <div class="modal-content">
        <span class="fechar">&times;</span>
        <img src="${piloto.img}" alt="${piloto.nome}">
        <h3>${piloto.nome}</h3>
        <div class="info">${piloto.info}</div>
      </div>
    `;

    modalLendario.style.display = 'flex';

    // Fechar modal
    modalLendario.querySelector('.fechar').addEventListener('click', () => {
      modalLendario.style.display = 'none';
    });
  });
});
