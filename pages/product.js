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

    // Rattachement de la Div contenant les infos au conteneur principal// 
    products.appendChild('ted__infos'); 

     // ------------------------Choix des options couleur------------------//

      const select = document.getElementById('select');
      for (let i = 0; i < colors.length; i++) {
      option.value = colors[i];
      option.text = colors[i];
      let colors = [];
      let option = document.createElement('option');
      option.innertext = colors;
       // if(){

      //  }else{

      //  }
    //

      // Rattachement de la selection  au conteneur principal//
     
      select.appendChild(option);
    
}

   //------------------------------add to CART------------------------------------//

let cart = [];
const addToCartBtn = document.getElementByClassName ('add__btn');


for (let i=o; i<addToCartBtn.length; i++){
  //envoyer au panier au clic du btn//
addToCartBtn[i].addEventListener('click',(event)=>{
  event.preventDefault();
});
let items =[];
}
}
//ajout d'articles dans local storage//
if (typeof(storage) !== 'undefined'){
    let item ={
      //* id:i + 1, name price et description .textContent//
    }
       
    if(json.parse(localStorage.getItem('items')) === null){
        items.push(item);
    localStorage.setItem('items', JSON.stringify(item));
    }else{
        const localItems = json.parse(localStorage.getItem('items'))
        localItems.map(data=>{
            if(item.id === data.id){
               item.nb = item.nb +1;
            
            }else{
                items.push(data);
            }
        })
        items.push(item);
        localStorage.setItem('items',JSON.stringify(items));
        }
        alert('article ajouté');
    }else{
        alert(' local storage error');
    }

    
    
  

  
