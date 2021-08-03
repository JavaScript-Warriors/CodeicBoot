

'use strict';

let sum = 0;

let discount = JSON.parse(localStorage.getItem('discount'))


function x() {
    let item = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i] != 'discount') {
            item.push(JSON.parse(localStorage.getItem(keys[i])))
        }
    }
    console.log(item);
    return item;
}


let cartItem = x();

console.log(cartItem[0].name);

let table = document.getElementById('table');

function hedarForTable() {

    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
    let thElemant1 = document.createElement('th');
    trElemant.appendChild(thElemant1);
    thElemant1.textContent = 'Remove Icon';

    let thElemant2 = document.createElement('th');
    trElemant.appendChild(thElemant2);
    thElemant2.textContent = 'imges';

    let thElemant3 = document.createElement('th');
    trElemant.appendChild(thElemant3);
    thElemant3.textContent = 'Name';

    let thElemant4 = document.createElement('th');
    trElemant.appendChild(thElemant4);
    thElemant4.textContent = 'Price';
}


hedarForTable();
bodyForTable();
footerForTable();



function footerForTable() {
    
    let trElemantForFooter = document.createElement('tr');
    table.appendChild(trElemantForFooter);

    let thElemantForFooter1 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter1);
    thElemantForFooter1.textContent = 'Total Price';


    let thElemantForFooter2 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter2);
    

    thElemantForFooter2.textContent = `${sum} $`;

    let trElemant = document.createElement('th');
    trElemantForFooter.appendChild(trElemant);

   



    let discountfooter = document.createElement('tr');


    table.appendChild(discountfooter);

    discountfooter.textContent = "Discount";



    let discountfooter1 = document.createElement('th');

    discountfooter.appendChild(discountfooter1);


    discountfooter1.textContent = `${discount * 100} %`;




    let discountValeu = sum - (discount * sum);



    let discountfooter12 = document.createElement('tr');
    table.appendChild(discountfooter12);
    discountfooter12.textContent = "Total After Discount";



    let discountfooter123 = document.createElement('th');

    discountfooter12.appendChild(discountfooter123);


    discountfooter123.textContent = `${discountValeu} $`;

}



function clearCart() {
    sum = 0;
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

}

// console.log(cartItems.firstName);
function bodyForTable() {

    for (let i = 0; i < cartItem.length; i++) {
        let trElemantForBody = document.createElement('tr');
        table.appendChild(trElemantForBody);

        let btndele = document.createElement('button');
        trElemantForBody.appendChild(btndele);
        btndele.setAttribute('value', cartItem[i].key);
        btndele.textContent = 'X';

        btndele.addEventListener('click', removeItemFromCart);

        let thElemantForBody = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody);

        let imgele = document.createElement('img');
        thElemantForBody.appendChild(imgele);

        imgele.setAttribute('src', cartItem[i].src);
        console.log(imgele);


        let thElemantForBody1 = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody1);

        thElemantForBody1.textContent = cartItem[i].name;


        let thElemantForBody2 = document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody2);
        thElemantForBody2.textContent = cartItem[i].price;
        
        sum += cartItem[i].price;



    }



}

function removeItemFromCart() {
    
    localStorage.removeItem(this.value)
    cartItem = x();
    clearCart();
    hedarForTable();
    bodyForTable();
    footerForTable();
}


function myFunction() {
    let x = document.getElementById('a');

    if (x.style.display === 'none') {

        x.style.display = 'block';

    } else {

        x.style.display = 'none';
    }
}