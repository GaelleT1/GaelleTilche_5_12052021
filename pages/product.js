let url = new URL(window.location.href);
let params = new URLSearchParams(window.location.href);
let id = params.get('id');

const url2 = "http://localhost:3000/api/teddies/" + id;

fetch (url2)
.then(function(res) {
  if (res.ok) {
    return res.json();
}
  })
.then(function(value){
    console.log(value);
   viewTeddies(value);
})

.catch(function(error){});

//fonction de recuperation des Ours//

function viewTeddies() {
    let Products = document.getElementById("pdt__container");
    let tedInfos = document.createElement("div"); 
    tedInfos.setAttribute("class", "ted__infos");

      let tedName = document.createElement("h2");
      tedName.setAttribute("class", "ted__name"); 
      tedName.innerText = url2(_name);
      tedName.appendChild(tedInfos);
      tedInfos.appendChild(Products);
    
    let tedImg = document.createElement("img");
      tedImg.setAttribute("class", "ted__pic");
      tedImg.setAttribute("src", url2(imageUrl));
      tedInfos.appendChild(tedImg);
  
      let tedDescription = document.createElement("p");
      tedDescription.setAttribute("class", "ted__description"); 
      tedDescription.innerText = url2(description);
      tedInfos.appendChild(tedDescription);
  
      let tedPrice = document.createElement("p");
      tedPrice.setAttribute("class", "ted__price"); 
      tedPrice.innerText = url2 + price;
      tedInfos.appendChild(tedPrice); 
  o
     


for (let i = 0; i < colors.length; i++) {
    option.value = colors[i];
    option.text = colors[i];
    var colors = url2.colors;
let pdtContainer = document.getElementById('pdt__container');
let select = document.createElement('select');
let options = document.createElement("option");
options.setAttribute = ('selected', 'selected');
pdtContainer.appendChild('select');
select.appendChild('options');
   
}
    
      }  
    
    
  

  
