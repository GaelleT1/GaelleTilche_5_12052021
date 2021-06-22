// Recuperation du nouveau lien de la page 'index' avec nouveaux parametres//

let pdtLocation = new URL(window.location.href);
let params = new URLSearchParams(pdtLocation.search);
let id = params.get('id');
const url2 = "http://localhost:3000/api/teddies/" + id;

// Import des data de l'API avec nouvelle url contenant l'id//
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

// Fonction de visualisation des Ours en fonction de leur id//

function viewTeddies(pdtLocation) {

  //Recuperation des Elements dans le DOM//
    let products = document.getElementById("pdt__container");
    let tedInfos = document.getElementById("ted__infos"); 

    // Ajout du contenu texte et source img, a l'interieur des elements//
    let tedImg = document.getElementById('ted__pic');
    tedImg.setAttribute ('src', pdtLocation.imageUrl);
    
    let tedName = document.getElementById('ted__name');
    tedName.innerText = pdtLocation.name;
      
    let tedDescription = document.getElementById('ted__description'); 
    tedDescription.innerText = pdtLocation.description;
      
    let tedPrice = document.getElementById('ted__price');
    tedPrice.innerText = pdtLocation.price;

    // Rattachement de la Div contenant les infos au conteneur principal// 
    products.appendChild(tedInfos); 

     // Choix des options//

      let select = document.createElement('select');
      for (let i = 0; i < colors.length; i++) {
      option.value = colors[i];
      option.text = colors[i];
      let colors = pdtLocation.colors;
      let options = document.createElement("option");
    //if
    options.setAttribute = ('selected', 'selected');//

      // Rattachement de la selection  au conteneur principal//
      products.appendChild('select');
      select.appendChild('options');
    
}
   
}  
    
    
  

  
