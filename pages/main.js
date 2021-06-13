let _id = [];
let _name = [];
let description = [];
let imageUrl = [];
let price = [];
let colors = [[],[],[],[]];

// Import des datas depuis l'api avec Fetch//

const teddies = "http://localhost:3000/api/teddies";
fetch (teddies)
  .then(function(res) {
  if (res.ok) {
    return res.json();
}
  
})
.then(function(value){
    console.log(value);
   PushTeddies(value);

  
})

.catch(function(error){});

//fonction de recuperation des Ours//

 function PushTeddies (teddies){
  console.log(teddies);

  //creation d'1 boucle a linterieur de Fetch pour chaque element//
    teddies.forEach((Element) => {
      let teddyList = ``;
      const cards = document.getElementById('cards');
      console.log(Element);

//creation d' elements HTML auquels on ajoute des classes et des attributs//

    let cardsContainer = document.createElement('div');
    cardsContainer.className = "cards__container";
    
    let singleCard = document.createElement('a');
    singleCard.setAttribute('href', 'pages/product.html?id=' + Element._id );
    singleCard.className = 'single__card';

    let image = document.createElement('img');
    image.className = 'card__img';
    image.setAttribute('alt','Photo TeddyBear');
    image.setAttribute ('src', Element.imageUrl)
      
    let cardDescription = document.createElement('div');
    cardDescription.className = 'card__description';


    let tedName = document.createElement('h2');
    tedName.className = 'ted__name';
    tedName.innerText = Element.name;
    console.log(tedName);

    let tedPrice = document.createElement('p');
    tedPrice.className = 'ted__price';
    tedPrice.innerText = Element.price;
   
    let viewBtn = document.createElement('a');
    viewBtn.className = 'view__btn';
    viewBtn.innerText = 'Voir';
    viewBtn.setAttribute('href', 'pages/product.html?id=' + Element._id );

    
//On rattache les nouveaux elements a leurs parents //
  
  cardsContainer.appendChild(singleCard);
  cardDescription.append(tedName,tedPrice, viewBtn);
  singleCard.append(image,cardDescription);
  
  cards.appendChild(singleCard);
  console.log(cards);

  
  
});
  
}



  

  
      
     

