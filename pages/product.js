let colorList = document.getElementsById('select')
let options = createElement('option');
let colorOptions = ["0"]["1"]["2"] ["3"] ["4"];
select.appendChild(options);

const url = "http://localhost:3000/api/teddies";

fetch (url)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value){
    console.log(value);
    (value);
})
.catch(function(error){});

for (let i = 0; i < data.length; i++) {
  options = document.createElement('option');
  options.text = data[i].colorList;
  colorList.add(options);
}  
const pdtId = queryString_url_id;
const position = document.querySelector('pdt__container');
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id =urlSearchParams.get('_id')



    