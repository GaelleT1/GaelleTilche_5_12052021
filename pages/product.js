let url = new URL(window.location.href);
let params = new URLSearchParams(url.search.slice(1));
let id = params.get('id');

/*
let colorList = document.getElementById('select')
let options = document.createElement('option');
let colorOptions = ["0"]["1"]["2"] ["3"] ["4"];
select.appendChild(options);
*/

const url2 = "http://localhost:3000/api/teddies/" + id;

fetch (url2)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value){
    console.log(value);
    
})
.catch(function(error){});

  const image2 =  getElementByClassname('Pdt_thumbnail');
   image.setAttribute ('src',imageUrl);

    const tedName =  getElementByClassname('ted__name');
    tedName.innerText = 'Element.name';
    
    const tedPrice =  getElementByClassname('ted__price');
    tedPrice.innerText = 'Element.price';
    
    const tedDescription = getElementByClassname('ted__description');
    tedDescription.innerText = 'Element.description';

    const pdtInfo = getElementByClassname('pdt__info');
    pdtInfo.append(image2,tedName, tedPrice, tedDescription );

      for (let i = 0; i < data.length; i++) {
        options = document.createElement('option');
        options.text = data[i].colorList;
        colorList.add(options);
      }  





