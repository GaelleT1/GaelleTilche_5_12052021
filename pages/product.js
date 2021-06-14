let url = new URL(window.location.href);
let params = new URLSearchParams(window.location.href());
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
    params(id)

.catch (function(error){

function viewTeddies() {
    let Products = document.getElementById("pdt__container");
    let tedInfos = document.createElement("div"); 
    tedInfos.setAttribute("class", "ted__infos");
  console.loglog(viewTeddies);
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
      tedPrice.innerText = url2(price);
      tedInfos.appendChild(tedPrice); 
    
      var myParent = document.body;

//Create array of options to be added
var array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options
for (let i = 0; i < colors.length; i++) {
  let colors = [[],[],[],[]];
  let option = document.getElementsByTagName("option");
    option.value = colors[i];
    option.text = colors[i];
    colors.appendChild('option');
}
    
      }  
    }
    
  )

  })
