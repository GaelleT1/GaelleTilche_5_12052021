let url = new URL(window.location.href);
let params = new URLSearchParams(window.location.search(1));
let id = params.get('id');





const url2 = "http://localhost:3000/api/teddies/" + id;

fetch (url2)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})

.then (function(value){
    console.log(value);
    viewTeddies(value)

.catch (function(error){

function viewTeddies(teddies) {
  let Products = document.getElementById("pdt__container");
   
   for (let i =0; i <= teddies.length; i++) {
  
      let tedInfos = document.createElement("div"); 
      tedInfos.setAttribute("class", "ted__infos");
  
      let tedName = document.createElement("h2");
      tedName.setAttribute("class", "ted__name"); 
      tedName.innerText = teddies[i].name;
      tedName.appendChild(tedInfos);
      tedInfos.appendChild(Products);
     
    
   let tedImg = document.createElement("img");
      tedImg.setAttribute("class", "ted__pic");
      tedImg.setAttribute("src", teddies[i](imageUrl));
      tedInfos.appendChild(tedImg);
  
      let tedDescription = document.createElement("p");
      tedDescription.setAttribute("class", "ted__description"); 
      tedDescription.innerText = teddies[i].description;
      tedInfos.appendChild(tedDescription);
  
      let tedPrice = document.createElement("p");
      tedPrice.setAttribute("class", "ted__price"); 
      tedPrice.innerText = teddies[i].price;
      tedInfos.appendChild(tedPrice);

      let colorList = document.querySelector('select')
      let options = document.createElement('option');
      let colorOptions = ["0"]["1"]["2"] ["3"] ["4"];
      select.appendChild(options);
      for (let i = 0; i < data.length; i++) {
        options = document.createElement('option');
        options.text = data[i].colorList;
        colorList.add(options);
  }  
  
  }
  }  
   
  
})



})
