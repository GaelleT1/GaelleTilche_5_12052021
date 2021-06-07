let _id = [];
let _name = [];
let description = [];
let imageUrl = [];
let price = [];
let colors = [[],[],[],[]];


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

function PushTeddies (teddies){
  const placeElement = document.querySelector('.cards');
   console.log(teddies);
    teddies.forEach((Element) => {
    

      let cardsContainer = document.createElement('div');
let singleCard = document.createElement('div');
let image = document.createElement('img');
let cardDescription = document.createElement('div');
let tedName = document.createElement('h2');
let tedPrice = document.createElement('p');
let viewBtn = document.createElement('a');
let teddyList = ``;
const cards = document.getElementById('cards');
console.log(Element);
cardsContainer.className = "cards__container";
singleCard.className = 'single__card';
tedName.className = 'ted__name';
tedPrice.className = 'ted__price';
viewBtn.className = 'view__btn';
image.className = 'card__img';
cardDescription.className = 'card__description';

singleCard.setAttribute('href', 'pages/product.html');
viewBtn.setAttribute('href', 'pages/product.html');
image.setAttribute('alt','Photo TeddyBear');

viewBtn.innerText = 'Voir';


cardsContainer.appendChild(singleCard);
singleCard.append(image,cardDescription);
cardDescription.append(tedName,tedPrice, viewBtn);
cards.appendChild(singleCard);
console.log(cards);
    });
  
  
}



  
      
     

