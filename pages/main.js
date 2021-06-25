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

  //boucler les ours a l'interieur de fetch//

    teddies.forEach((Element) => {
      let teddyList = ``;
      const cards = document.getElementById('cards');
      console.log(Element);

//creation d'elements HTML + ajout de classes et attributs//

    let cardsContainer = document.createElement('div');
    cardsContainer.className = "cards__container";
    
    let singleCard = document.createElement('a');
    //new url  pour recuperer les ours depuis l'id (cartes avec liens actifs) //
    singleCard.setAttribute('href', 'pages/product.html?id=' + Element._id );
    singleCard.className = 'single__card';

    let image = document.createElement('img');
    image.className = 'card__img';
    image.setAttribute('alt','Photo TeddyBear');
    //source de l'image a partir de l element imageUrl//
    image.setAttribute ('src', Element.imageUrl);
      
    let cardDescription = document.createElement('div');
    cardDescription.className = 'card__description';


    let tedName = document.createElement('h2');
    tedName.className = 'ted__name';
    //recuperation du nom a partir de l element 'name'//
    tedName.innerText = Element.name;
    console.log(tedName);

    let tedPrice = document.createElement('p');
    tedPrice.className = 'ted__price';
    tedPrice.innerText = Element.price/100  +  '€';
   
    let viewBtn = document.createElement('a');
    viewBtn.className = 'view__btn';
    viewBtn.innerText = 'Voir';
    //lien du bouton vers la page 'product'//
    viewBtn.setAttribute('href', 'pages/product.html?id=' + Element._id );

    
//rattachement des nouveaux elements aux parents // 
  cardsContainer.appendChild(singleCard);
  cardDescription.append(tedName,tedPrice, viewBtn);
  singleCard.append(image,cardDescription);
  cards.appendChild(singleCard);
  console.log(cards);

});
  
}



  

  
      
     

