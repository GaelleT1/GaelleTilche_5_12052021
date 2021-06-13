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




    