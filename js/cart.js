'use strict';

let sum = 0;
let discount = JSON.parse(localStorage.getItem('discount'));

function x() {
    let item = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] !== 'discount' && keys[i] !== 'allCourses' && keys[i] !== 'counter') {
            item.push(JSON.parse(localStorage.getItem(keys[i])));
        }
    }
    return item;
}

let cartItem = x();
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
    let discountfooter = document.createElement('tr');
    table.appendChild(discountfooter);
    discountfooter.textContent = 'Discount';
    let discountfooter1 = document.createElement('th');
    discountfooter.appendChild(discountfooter1);
    let discountfooter11 = document.createElement('th');
    discountfooter.appendChild(discountfooter11);
    let discountfooter111 = document.createElement('th');
    discountfooter.appendChild(discountfooter111);
    discountfooter111.textContent = `${discount * 100} %`;
    let discountValeu = sum - (discount * sum);
    let discountfooter12 = document.createElement('tr');
    table.appendChild(discountfooter12);
    discountfooter12.textContent = 'Total After Discount';
    let discountfooter123 = document.createElement('th');
    discountfooter12.appendChild(discountfooter123);
    let discountfooter1231 = document.createElement('th');
    discountfooter12.appendChild(discountfooter1231);
    let discountfooter231 = document.createElement('th');
    discountfooter12.appendChild(discountfooter231);
    discountfooter231.textContent = `${discountValeu} $`;
    let thElemantForFooter2 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter2);
    let trElemant = document.createElement('th');
    trElemantForFooter.appendChild(trElemant);
    let thElemantForFooter20 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter20);
    thElemantForFooter20.textContent = `${sum} $`;
}

function clearCart() {
    sum = 0;
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

}

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
    localStorage.removeItem(this.value);
    cartItem = x();
    clearCart();
    hedarForTable();
    bodyForTable();
    footerForTable();
}

let shown = false;
let checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click',
    function myFunction() {

        let form = document.getElementById('a');
        let checkoutButton = document.getElementById('checkout-button');

        if(!shown) {
            form.style.display = 'block';
            checkoutButton.innerText = 'hide checkout form';
            shown = !shown;
        } else {
            form.style.display = 'none';
            checkoutButton.innerText = 'proceed to checkout';
            shown = !shown;
        }
    }
);

let payForm = document.getElementById('a');
payForm.addEventListener('submit', paySubmit);

function paySubmit(e) {
    e.preventDefault();
    alert('your application has been sent you will receive your courses by e-mail in 2 hours ');
    clearCart();
    localStorage.clear();
    location.reload();

}
