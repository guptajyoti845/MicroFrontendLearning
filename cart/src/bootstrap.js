import faker from 'faker';

console.log("Cart Shown");
let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;

