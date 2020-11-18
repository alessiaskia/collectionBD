/* eslint-disable no-return-assign */
// aller chercher la div pour envoyer le html que nous allons créer
var app = document.getElementById('app');

// array des objets (les BDs)
var bds = [
  {
    id: 0,
    titre: '20th century boys',
    editeur: 'Panini',
    collection: 'Panini Manga',
    serie: null,
    resume: "Menacée d'extinction à la fin du XXème siècle, l'humanité ne serait pas entrée dans le nouveau millénaire sans eux...\n ",
    type: 'manga',
    etat: 'abîmé',
    image: '20th-century-boys.jpg',
    isbn: 9782809487572,
    anneeParution: 2016,
    numeroTome: 1,
    prix: 16.6,
    themes: [
      'société',
      'amitié',
      'catastrophe',
    ],
    auteurs: [
      'Naoki Urasawa',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 1,
    titre: "L'Ivroire du Magohamoth",
    editeur: 'Soleil Productions',
    collection: 'Soleil de nuit',
    serie: 'Lanfeust de Troy',
    resume: "Dans le monde de Troy où chacun possède un pouvoir, Lanfeust, un apprenti forgeron peut fondre le métal. Il connaît une vie paisible jusqu'au jour où il découvre qu'au contact d'une épée, il peut posséder le pouvoir absolu ! Accompagné du vieux sage Nicolède et de ses deux filles, Cyan et Cixi, il est emporté dans un tourbillon d'aventures au cours desquelles il va se lier d'amitié avec la plus dangereuse des créatures, le troll Hébus ! De son petit village de Glinin à la ville éternelle d'Eckmül, en passant par les lointaines baronnies, suivez Lanfeust dans sa fabuleuse quête qui décidera du sort de Troy !",
    type: 'bd',
    etat: 'bon',
    image: 'lanfeust-de-troy.jpg',
    isbn: 9782877642576,
    anneeParution: 1994,
    numeroTome: 1,
    prix: 7.83,
    themes: [
      'Héroïc Fantasy',
    ],
    auteurs: [
      'Christophe Arleston',
      'Didier Tarquin',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 2,
    titre: 'Fairy Tail',
    editeur: 'Pika',
    collection: null,
    serie: 'Fairy Tail',
    resume: "Les guildes magiques sont des associations. Elles proposent différentes tâches aux magiciens, allant de la recherche d'un objet à l'attaque en règle. Lucy, une jeune fille, rêve de devenir magicienne. Un jour, elle rencontre Natsu, un magicien maîtrisant le feu, ce dernier l'invite alors à rejoindre sa guilde.",
    type: 'manga',
    etat: 'neuf',
    image: 'fairytail.jpg',
    isbn: 9782845999145,
    anneeParution: 2008,
    numeroTome: 1,
    prix: 3,
    themes: [
      'magie',
      'aventure',
      'shonen',
    ],
    auteurs: [
      'Hiro Mashima',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 3,
    titre: 'JAMES BOND T6 CASINO ROYALE',
    editeur: 'Delcourt Comics',
    collection: ' Contrebande',
    serie: null,
    image: 'jamesbond.jpg',
    resume: "Pour sa première mission, James Bond affronte le tout-puissant banquier privé du terrorisme international, Le Chiffre. Pour achever de ruiner ce dernier et démanteler le plus grand réseau criminel qui soit, Bond doit le battre lors d'une partie de poker à haut risque au Casino Royale. La très belle Vesper Lynd, attachée au Trésor, l'accompagne afin de veiller à ce que l'agent 007 prenne soin de l'argent du gouvernement britannique qui lui sert de mise, mais rien ne va se passer comme prévu. Alors que Bond et Vesper s'efforcent d'échapper aux tentatives d'assassinat du Chiffre et de ses hommes, d'autres sentiments surgissent entre eux, ce qui ne fera que les rendre plus vulnérables...",
    type: 'comics',
    etat: 'bon',
    isbn: 9782413012887,
    anneeParution: 2020,
    numeroTome: 6,
    prix: 25,
    themes: [
      'espionnage',
      'aventure',
      'action',
    ],
    auteurs: [
      'Van Jensen',
      'Dennis Calero',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 4,
    titre: 'Gretchen',
    editeur: 'DUPUIS',
    collection: '',
    serie: 'Zombillénium',
    resume: "Zombillénium est un parc d'attractions qui emploie des morts pour effrayer les visiteurs. Cette société (fictive) possède un capital de 2 000 000 d'euros, et se situe sur la Route du Marais Putride (D40), à Verchain-Maugrée tome 1 s'ouvre sur la tentative de fugue d'Aton Noujdmet, momie au parc Zombillénium, qui cherche à rejoindre le Caire en stop, mais il est récupéré en voiture par Francis, directeur d'exploitation du parc, et Sirius. Une dispute éclate dans le véhicule, et Francis percute accidentellement un piéton, le tuant sur le coup. Le piéton est Aurélien Zahner, tout juste quitté par sa femme. Il vient de quitter le bar-tabac qu'il tentait de braquer mais il est reconduit dans le bon chemin in extremis par Gretchen, sorcière stagiaire également employée du parc. Mordu par Francis et Blaise et transformé en démon, Aurélien est engagé comme vendeur de barbe-à-papa. À la suite d'un incident où une soudaine métamorphose provoque l'arrêt cardiaque d'une visiteuse, il est sur le point d'être « licencié » d'un coup de pieu dans le cœur, mais le directeur du parc, Behemoth, veut le tester dans le train fantôme. Sa période d'essai est un succès, malgré les manœuvres des zombies jaloux qui veulent le pousser à la faute, et il intègre définitivement Zombillénium.",
    type: 'bd',
    etat: 'neuf',
    image: 'Gretchen Zombillénium.jpg',
    isbn: 9782800147215,
    anneeParution: 0,
    numeroTome: 1,
    prix: 14.5,
    themes: [
      'bande dessinée',
      'fantastique',
      'humour',
    ],
    auteurs: [
      'Arthur De Pins',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 5,
    titre: "La route d'Armilia",
    editeur: 'Casterman',
    collection: '',
    serie: 'Les Cités obscures',
    resume: "La route d'Armilia raconte le voyage de deux enfants en dirigeable, de MYLOS à ARMILIA. Le jeune Ferdinand doit apporter au professeur Pym, dans le Grand Nord, la formule capable de remettre en route les rouages du TEMPS. Le long voyage des deux enfants leur fait affronter les périls les plus divers et leur permet de survoler des villes comme BRÜSEL, Genova ou Kobenhavn, et de croiser le Vaisseau du désert du malheureux WAPPENDORF.Mais sommes-nous bien sûr que ce voyage se déroule réellement ? Ne serait-ce pas plutôt à l'intérieur d'une usine de Mylos que Ferdinand, lecteur passionné de livres interdits, a rêvé toute cette histoire ?",
    type: 'bd',
    etat: 'bon',
    image: "la_route_d'armilia.jpg",
    isbn: 2203343036,
    anneeParution: 1988,
    numeroTome: 4,
    prix: 20,
    themes: [
      'voyage',
      'aventure',
    ],
    auteurs: [
      'Schuiten',
      'Peeters',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 6,
    titre: 'Tokyo Ghoul',
    anneeParution: 2015,
    editeur: 'Glénat',
    collection: 'Shonen',
    serie: null,
    resume: 'À Tokyo, sévissent des goules, monstres cannibales se dissimulant parmi les humains pour mieux s’en nourrir. Étudiant timide, Ken Kaneki est plus intéressé par la jolie fille qui partage ses goûts pour la lecture que par ces affaires sordides, jusqu’au jour où il se fait attaquer par l’une de ces fameuses créatures. Mortellement blessé, il survit grâce à la greffe des organes de son agresseur… Remis de son opération, il réalise peu à peu qu’il est devenu incapable de se nourrir comme avant et commence à ressentir un appétit suspect envers ses congénères. C’est le début d’une descente aux enfers pour Kaneki, devenu malgré lui un hybride mi-humain, mi-goule.',
    type: 'manga',
    etat: 'bon',
    image: 'ken_kaneki.jpg',
    isbn: 9782344006474,
    numeroTome: 10,
    prix: 6.6,
    themes: [
      'Suspense',
      'Fantastique',
    ],
    auteurs: [
      'Sui Ishida',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 7,
    titre: 'Comme une Ombre',
    anneeParution: 2018,
    auteurs: [
      'Pascale Legardinier, Gilles Legardinier ',
    ],
    editeur: "J'AI LU",
    collection: "J'AI LU",
    image: 'comme_une_ombre.jpg',
    resume: "Découvrer la réjouissante aventure d'un couple explosif imaginé par un vrai couple dans la vie.Partout, femmes et hommes fonts des étincelles",
    type: 'manga',
    etat: 'bon',
    isbn: 9782290161791,
    prix: 11.9,
    themes: [
      'amour',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 8,
    titre: 'La Forêt',
    editeur: 'Casterman',
    collection: null,
    serie: null,
    resume: "Ce fut un temps d'avant le vôtre... A la frontière de notre monde et des horizons inconnus... Là où le savoir de l'homme s'arrête... Là où celui des rêveurs commence... Un temps que seuls les magiciens peuvent comprendre. ",
    type: 'bd',
    etat: 'neuf',
    image: 'La-Foret.jpg',
    isbn: 9782203391598,
    anneeParution: 2007,
    numeroTome: 1,
    prix: 15,
    themes: [
      'Fantastique',
      'Féérique',
    ],
    auteurs: [
      'Vincent Perez',
      'Tiburge Oger',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 9,
    isbn: 2791092111682,
    titre: "Le yéti qui avait perdu l'appétit",
    image: 'Enola.jpg',
    anneeParution: 2008,
    auteurs: [
      'Joris Chamblain',
      'Lucile Thibaudier',
    ],
    editeur: 'Editions de la Gouttiére',
    collection: 'jeunesse',
    serie: 'Enola & les animaux extraordinaires',
    numeroTome: 4,
    prix: 10.7,
    resume: "Caché u coeur d'histoire Naturelle se trouve le cabinet d'Enola, une vétérinaire hors du commun.\nSa spécilalité?\nLes animaux des contes et légendes!",
    type: 'bd',
    themes: [
      'amitié',
      'animaux',
      'fantastique',
    ],
    etat: 'neuf',
  },
  {
    id: 10,
    titre: "Jusqu'au dernier",
    editeur: 'Bamboo',
    collection: 'GRAND ANGLE',
    serie: null,
    resume: "L’époque des cow-boys tire à sa fin. Bientôt, ce sont les trains qui mèneront les vaches jusqu'aux abattoirs de Chicago. Accompagné de Benett, un jeune simplet de 20 ans, Russell a décidé de raccrocher ses éperons pour devenir fermier dans le Montana.",
    type: 'bd',
    etat: 'neuf',
    image: 'dernierjour.jpg',
    isbn: 9782818967003,
    anneeParution: 2019,
    numeroTome: 1,
    prix: 17.9,
    themes: [
      'western',
    ],
    auteurs: [
      'Jérôme Félix',
      'Paul Gastine',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 11,
    titre: 'Un amour de chat',
    editeur: 'Soleil',
    collection: 'Soleil Manga',
    serie: 'Plum',
    anneeParution: 2009,
    auteurs: [
      'Natsumi Hoshino',
    ],
    image: 'plum.jpg',
    numeroTome: 2,
    prix: 8.25,
    resume: 'Plum, jeune chatte pleine d’amour, ne voulait qu’une vie paisible à être dorlotée par son maître, Taku. Sa vie a basculé depuis l’arrivée de Flocon, un chaton malicieux qui en fait voir de toutes les couleurs à Plum. Mais le temps passe, et les deux félins s’habituent à la cohabitation, bien que les bêtises ne manquent pas !',
    themes: [
      'animaux',
      'amitié',
      'aventure',
      'chats',
    ],
    isbn: 9782302038417,
    type: 'manga',
    etat: 'neuf',
  },
  {
    id: 12,
    titre: 'Catwoman: La main au collet',
    editeur: 'Urban Comics',
    collection: 'DC Renaissance',
    serie: null,
    resume: "Les rues de Gotham sont inquiétantes, \n mais ce qui rampe sous ses rues pavées l'est encore davantage...  \n  Engagée dans une guerre contre les pires gangsters de la ville, \n Catwoman met une fois de plus ses plus proches alliés en danger.  \n Pour sauver l'un d'entre eux, elle devra s'aventurer dans les sinistres labyrinthes de la Cité et affronter ce qui, \n jusqu'alors, demeurait méconnu de tous.",
    type: 'comics',
    etat: 'neuf',
    image: 'catwoman.jpg',
    isbn: 9782365776592,
    anneeParution: 2015,
    numeroTome: 4,
    prix: 19,
    themes: [
      'batman',
      'comics',
      'thriller',
    ],
    auteurs: [
      'Ann Nocenti',
      'Sandoval Rafa',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 13,
    titre: "L'enfant des étoiles",
    editeur: 'Le Lombard',
    collection: null,
    serie: 'Thorgal',
    resume: "Le secret des origines de Thorgal ? Tout commence par la découverte d'un bébé sur un mystérieux radeau par un chef viking. A l'adolescence, Thorgal désire connaître son passé. Un dieu intercédera en sa faveur pour percer le secret de sa naissance... Un album fondateur composé de trois histoires qui dévoilent les origines de Thorgal.",
    type: 'bd',
    etat: 'bon',
    image: 'thorgal7.jpg',
    isbn: 2803604604,
    anneeParution: 1984,
    numeroTome: 7,
    prix: 20.09,
    themes: [
      'Médiéval',
      'fantastique',
      'Aventure',
    ],
    auteurs: [
      'Jean Van Hamme',
      'Grzegorz Rosinski',
    ],
    like: false,
    emprunt: false,
  },
  {
    id: 14,
    titre: 'Twilight Fascination volume 1',
    editeur: 'Pika Edition',
    collection: null,
    serie: 'Twilight',
    resume: 'Adaptation graphique de la première partie du roman Fascination',
    type: 'manga',
    etat: 'bon',
    isbn: 9782811602451,
    anneeParution: 2010,
    numeroTome: 1,
    prix: 12.9,
    themes: [
      'romance',
      'vampire',
      'young adulte',
    ],
    auteurs: [
      'Stephanie Meyer',
      'Young Kim',
    ],
    image: 'twilight.jpg',
  },
];

// créer des <li> pour chaque objet
var catalogue = '<ul class="catalogue"> <h1>La collection de BDs de Loic</h1>';
var titre = '';
var livre = '';
var serie = '';
var collection = '';
var numeroTome = '';
var resume = '';
var like = true;
var emprunt = false;

for (var bd of bds) {
  livre = '<ul class= "livre">';
  titre = `<li class=titre>${bd.titre}</li>`;
  var id = `<li>Id du livre : ${bd.id}</li>`;
  var editeur = `<li>Éditeur : ${bd.editeur}</li>`;
  var prix = `<li>Prix : ${bd.prix} euros</li>`;
  var themes = `<li>Thème(s) : ${bd.themes}</li>`;
  var auteurs = `<li>Auteur(s) : ${bd.auteurs}</li>`;
  var type = `<li>Type : ${bd.type}</li>`;
  var etat = `<li>État : ${bd.etat}</li>`;
  var image = `<li><img src="./assets/${bd.image}" alt="couverture"/></li>`;
  var isbn = `<li>ISBN : ${bd.isbn}</li>`;
  var anneeParution = `<li>Année de parution : ${bd.anneeParution}</li>`;

  // pour les livres sans indications de collections/serie/numero de tome
  if ((bd.collection === null) || (bd.collection === undefined)) {
    collection = '<li>Collection : aucune</li>';
  } else {
    collection = `<li>Collection : ${bd.collection}</li>`;
  }
  if ((bd.serie === null) || (bd.serie === undefined)) {
    serie = '<li>Série : aucune</li>';
  } else {
    serie = `<li>Série : ${bd.serie}</li>`;
  }
  if ((bd.numeroTome === null) || (bd.numeroTome === undefined)) {
    numeroTome = '<li>Numéro de tome : aucun</li>';
  } else {
    numeroTome = `<li>Numéro de tome : ${bd.numeroTome}</li>`;
  }

  // like
  if ((bd.like === undefined) || !bd.like) {
    like = '<li>Like ? Non</li>';
  } else {
    like = '<li>Like ? Oui</li>';
  }

  // emprunté
  if ((bd.emprunt === true)) {
    emprunt = '<li>Emprunté : Oui </li>';
  } else {
    emprunt = '<li>Emprunté : Non </li><button class="emprunter">Emprunter</button>';
  }

  // resume: premiers 30 caractères + bouton pour lire la suite
  resume = `<li><span class="visible">Résumé : ${bd.resume.substr(0, 31)}</span><button class="lireSuite">Lire la suite</button><span class="cache">${bd.resume.substr(31, 1000)}</span></li>`;

  livre += titre += image += id += editeur += collection += serie += resume += type += etat += isbn += anneeParution += numeroTome += prix += themes += auteurs += like += emprunt += '</ul>';
  catalogue += livre;
}

catalogue += '</ul>';
var panier = '<div class="panier"><h3>Panier</h3><p class="listeEmpruntes"></p></div>';
app.innerHTML += catalogue;
app.innerHTML += panier;

var buttonsResume = document.querySelectorAll('.lireSuite');
for (var button of buttonsResume) {
  button.addEventListener('click', function (e) {
    e.currentTarget.nextSibling.classList.add('visible');
    e.currentTarget.classList.add('cache');
  });
}

var buttonsEmprunt = document.querySelectorAll('.emprunter');
var emprunte = document.querySelector('.listeEmpruntes');
for (var buttonEmprunt of buttonsEmprunt) {
  buttonEmprunt.addEventListener('click', function (e) {
    var titreChoisi = e.currentTarget.parentNode.firstElementChild;
    emprunte.innerHTML += `<p>${titreChoisi.innerHTML}</p>`;
  });
}

// essai tuto
// var buttonResume = document.querySelectorAll('.lireSuite');
// function showResume() {
//   buttonResume.nextElementSibling.classList.add('visible');
//   buttonResume.parentNode.removeChild(buttonResume);
// }
// for (var i = 0; i < buttonResume.length; i++) {
//   buttonResume[i].addEventListener('click', showResume);
// }

// VERSION 2 : AVEC OBJECT.ENTRIES
// transformer les objets en array avec Object.entries
// var livre = '';
// for (var bd of bds) {
//   var arrayLivre = bd;
//   var entries = Object.entries(arrayLivre);

//   // afficher chaque arrayLivre
//   for (var [name, property] of entries) {
//     livre += '<ul class="livre">';
//     livre += `<li>${name} : ${property}</li>`;
//     livre += '</ul>';
//   }
// }
