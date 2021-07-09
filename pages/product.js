// Recuperation du nouveau lien de la page 'index' avec nouveaux parametres//

let pdtLocation = new URL(window.location.href);
let params = new URLSearchParams(pdtLocation.search);
let id = params.get('id');
const url2 = "http://localhost:3000/api/teddies/" + id;

// -------Import des data de l'API avec nouvelle url contenant l'id--------//
fetch (url2)
.then(function(res) {
  if (res.ok) {
    return res.json();
}
  })
.then(function(value){
  
  viewTeddies(value);
})

.catch(function(error){});

//------------- Fonction de visualisation des Ours en fonction de leur parametres-------------//

function viewTeddies(pdtLocation) {

  //--------------------Recuperation des Elements dans le DOM--------//
    let products = document.getElementById("pdt__container");
    let tedInfos = document.getElementById("ted__infos"); 

    // Ajout du contenu texte et source img, a l'interieur des elements html//
    let tedImg = document.getElementById('ted__pic');
    tedImg.setAttribute ('src', pdtLocation.imageUrl);
    
    let tedName = document.getElementById('ted__name');
    tedName.innerText = pdtLocation.name;
      
    let tedDescription = document.getElementById('ted__description'); 
    tedDescription.innerText = pdtLocation.description;
      
    let tedPrice = document.getElementById('ted__price');
    tedPrice.innerText = pdtLocation.price/100 + '€';
  
   // ------------------------Choix des options couleur------------------//

      const select = document.getElementById('select');
      let colors = pdtLocation.colors;
      for (let i = 0; i < colors.length; i++) {
      let option = document.createElement('option');
      option.value = colors[i];
      option.innerText = colors[i];
    // Rattachement de la selection  au conteneur principal//
     select.appendChild(option);
      console.log(option.value);
}


   //------------------------------add to CART------------------------------------//
//creation de l'évenement'envoyer au panier' au clic du btn//
const addBtn = document.getElementsById('add__btn');
 addBtn[i].addEventListener('click',(event)=>{
  event.preventDefault();
//creation du panier
let cart = document.getelementbyId('cart');
let items = [];
//sauver le panier dans local storage
function save  () {
  localStorage.setItem("cart", JSON.stringify(cart.items));
}
 }, //charger le panier depuis local storage
 function Load () {
  cart.items = localStorage.getItem("cart");
  if (cart.items == null) { cart.items = []; }
  else { cart.items = JSON.parse(cart.items); }
},
 )
}
for(let i=0; i<addBtn.length; i++){
   {
		if(typeof(Storage) !== 'undefined'){
				let items = {
						id:i+1,
						let name = tedName.innertText;
						tedPrice.innerText;
						
					};//si panier = local storage :push items dans le panier
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(items);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{ 
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(items.id == data.id){
							items.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				console.log(error);
			}
		});
	}
	//ajouter les donnee au panier
	const iconShoppingP = document.querySelector('.iconShopping p');
	let nb = 0;
	JSON.parse(localStorage.getItem('items')).map(data=>{
		nb = nb+data.nb
;	});
//creation du tableau
	const cartItems = cartBox.querySelector('table');
	let datatable = '';
	dataTable += document.createElement('tr')
  document.createElement('tr');
	if(JSON.parse(localStorage.getItem('items'))[0] === null){
    dataTable += 
	}else{
		JSON.parse(localStorage.getItem('items')).map(data=>{
     
		});
	}
	
}
