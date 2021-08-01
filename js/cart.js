

// let array = {

//     firstName: 'Qutadah',
//     lastName: 'Almomani',
//     age: 25,
// };






//
let sum=0;
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartItems);
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

hedarForTable();
bodyForTable();
footerForTable();


function footerForTable() {
    let trElemantForFooter = document.createElement('tr');
    table.appendChild(trElemantForFooter);
    let thElemantForFooter1 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter1);
    thElemantForFooter1.textContent ='Total Price' ;
    
    let thElemantForFooter2 = document.createElement('th');
    trElemantForFooter.appendChild(thElemantForFooter2);
    thElemantForFooter2.textContent = `${sum} $`;


}
console.log(cartItems.firstName);
function bodyForTable(){
    for (let i = 0; i < 3; i++) {
        let trElemantForBody=document.createElement('tr');
        table.appendChild(trElemantForBody);
        let thElemantForBody=document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody);
        thElemantForBody.textContent=cartItems.firstName;
        let thElemantForBody1=document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody1);
        thElemantForBody1.textContent=cartItems.lastName;
        let thElemantForBody2=document.createElement('th');
        trElemantForBody.appendChild(thElemantForBody2);
        thElemantForBody2.textContent=cartItems.age;
        sum+=cartItems.age ;
        
    }
}

