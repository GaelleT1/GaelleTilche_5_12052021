const { json } = require("express");
const e = require("express");

let cart = [];
const addToCartBtn = document.getElementByClassName ('add to cart');

//ajout d' articles dans local storage//
for (let i=o; i<addToCartBtn.length; i++){
addToCartBtn[i].addEventListener('click', function(e){
let items =[];
})
}

if (typeof(storage) !== 'undefined'){
    let item ={
       //* id:i + 1,
        name: e.target.Elemnt.child[].textContent
        price:e.target.Element.children[].children[0].textContent
        number
    }//
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
}