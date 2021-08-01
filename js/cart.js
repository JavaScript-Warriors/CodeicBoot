

'use strict';


// let array = {

//     firstName: 'Qutadah',
//     lastName: 'Almomani',
//     age: 25,
// };

// console.log(array);


// const array=[];
// let data = localStorage.getItem('cart');


let sum = 0;

function x() {
    let item = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        item.push(JSON.parse(localStorage.getItem(keys[i])))
    }
    console.log(item);
    return item;
}


let cartItem = x();

console.log(cartItem[0].name);
let table = document.getElementById('table');
let trElemant = document.createElement('tr');

table.appendChild(trElemant);
console.log(table);
function hedarForTable() {

    let thElemant1 = document.createElement('th');
    trElemant.appendChild(thElemant1);
    thElemant1.textContent = 'Name';
    let thElemant2 = document.createElement('th');
    trElemant.appendChild(thElemant2);
    thElemant2.textContent = 'Description';
    let thElemant3 = document.createElement('th');
    trElemant.appendChild(thElemant3);
    thElemant3.textContent = 'Price';
    let thElemant4 = document.createElement('th');
    trElemant.appendChild(thElemant4);
    thElemant4.textContent = 'Remove Icon';
}


function render(){


    
hedarForTable();
bodyForTable();
footerForTable();
}
// clearCart()



function footerForTable() {
    let trElemantForFooter = document.createElement('tr');
    table.appendChild(trElemantForFooter);

    let thElemantForFooter1 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter1);
    thElemantForFooter1.textContent = 'Total Price';

    let thElemantForFooter2 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter2);


    let thElemantForFooter3 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter3);

    thElemantForFooter3.textContent = `${sum} $`;


}

function clearCart() {
    sum=0;
    // let trelement=document.createElement('tr');
    // table.appendChild(trelement);
    // trelement.textContent="";
  let  tbodyelement =document.createElement('tbody');
table.appendChild(tbodyelement);
tbodyelement.removeAttribute(0);
}

// console.log(cartItems.firstName);
function bodyForTable() {

    for (let i = 0; i < cartItem.length; i++) {
        let trElemantForBody = document.createElement('tr');
        table.appendChild(trElemantForBody);


        let thElemantForBody = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody);
        thElemantForBody.textContent = cartItem[i].name;
        let thElemantForBody1 = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody1);
        thElemantForBody1.textContent = cartItem[i].description;
        let thElemantForBody2 = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody2);
        thElemantForBody2.textContent = cartItem[i].price;
        sum += cartItem[i].price;



        let btndele = document.createElement('button');
        trElemantForBody.appendChild(btndele);
        btndele.textContent = 'X';





        btndele.addEventListener('click', removeItemFromCart);


    }

    }

    function removeItemFromCart(event) {

        let data = localStorage.getItem('cartItem');
        let Arrayprs = JSON.parse(data);
        if (event.target.id !== null) {
            //   console.log(event.target.id);
            // let data = localStorage.getItem('cart');
            // let Arrayprs = JSON.parse(data);
            console.log('before', cartItem.length)
            console.log('before', cartItem)
            // console.log(cart.items[event.target.id]);
            cartItem.splice(event.target.id, 1);

            console.log('after', cartItem.length);
            console.log('after', cartItem);
            
            clearCart();
            
        //   tbody.remove();
        hedarForTable();
            bodyForTable();
            footerForTable();

            // console.log(Arrayprs.length);
            // localStorage.clear();
            // let araystrings = JSON.stringify(cartItem);
            // localStorage.setItem('cartItem', araystrings);


            
        }
    }
    render();
   