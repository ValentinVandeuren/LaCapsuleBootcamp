var lastPlay = {
       couleur : 'bleu',
       chiffre : '6',
};

var cards = [
   {
       couleur : 'vert',
       chiffre : '6',
   },
   {
       couleur : 'rouge',
       chiffre : '6',
   },
   {
       couleur : 'bleu',
       chiffre : '9',
   },
   {
       couleur : 'vert',
       chiffre : '9',
   }
];

let newPlay = [];

for(let i=0; i <cards.length; i++) {
    if(cards[i].couleur === lastPlay.couleur || cards[i].chiffre === lastPlay.chiffre) {
        console.log('tu peux jouer!');
        newPlay.push({
            couleur: cards[i].couleur,
            chiffre: cards[i].chiffre
        });
    } else{
        newPlay.push({
            couleur: cards[i].couleur,
            chiffre: cards[i].chiffre
        })
    };
};
newPlay.shift();

if(newPlay.length === 1) {
    console.log("UNO!")
}

if(newPlay.length === 0) {
    console.log("J'ai gagné!")
}

console.log(newPlay)