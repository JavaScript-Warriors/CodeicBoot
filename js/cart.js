

'use strict';

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

function hedarForTable() {

    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
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
    // let thElemandtForFooter2 = document.getElementById('ClickToPay');
    // trElemantForFooter.appendChild(thElemandtForFooter2);

    let thElemantForFooter3 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter3);

    thElemantForFooter3.textContent = `${sum} $`;


}

function pay(ev) {
    let buttonPay = document.createElement('a');

    buttonPay.setAttribute('href', 'form.html');
    buttonPay.textContent = 'hello';

}
console.log(pay);
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
        btndele.setAttribute('value', cartItem[i].key);
        btndele.textContent = 'X';
        btndele.addEventListener('click', removeItemFromCart);
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

