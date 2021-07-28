let cartTable = document.getElementById('cart-table');
let tBody = document.getElementById('tbody');
let cartRow = document.createElement ('tr');
let cartItem = document.createElement('td');

tBody.appendChild(cartRow);
cartRow.appendChild(cartItem);

//FAIRE APPARAITRE/DISPARAITRE LE PANIER//

window.onload = function(){
  //initialisation des variables icones+ conteneur panier//
  const cartIcon = document.getElementsByClassName('cart-zone');
  const cartContainer = document.getElementById('cart-container');
  let closeIcon = document.getElementsByClassName('fa-close');

//le panier apparait au click de l'icone 'cart'//
  cartIcon.addEventListener('click', function(){
  //ajout de la classe "active" au conteneur,pour que le panier apparaisse au click//
  cartContainer.classList.add('active');
});

//fermer le panier au click de l'icone X en supprimant la classe "active//
closeIcon.addEventListener('click', function(){
cartContainer.classList.remove('active');
});
}


/*//selection de la rangee dans le Dom//



//boucle a travers tous les elements//
for (let i = 0; i <removeItem.length; i++){
    let button = removeItem[i]
// fonction pour effacer toute la rangée contenant les articles, au clic du btn//
    button.addEventListener('click', function(event){
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        totalUpdate()
    })
}
//fonction pour mettre le total a jour apres suppression de l article//
function totalUpdate(){
let cartContainer = document.getElementById('cart-container')[0]
let cartRows = cartContainer.getElementsByClassName('cart__rows')
let itemPrice = document.getElementsByClassName ('item__price')[0]
let itemQuantity = document.getElementsByClassName('item__quantity');
}
//fonction fermer le panier au click de l icone /*
let closeCart = document.getElementById('close-icon');//icone fermeture du panier
  closeCart.addEventListener('click', function(){
    cartContainer.classList.remove('active');
  });

   //selection du bouton retirer l' article//
    let removeItem = document.getElementsByClassName('delete__btn');

  */

   