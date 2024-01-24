// @ts-check
/**
 * This script adds the functionality of buttons
 * which updates the cart order.
 * 
 */
"use strict";
console.log(`cart.js loaded by /static/js`);

/**
 * @type {NodeListOf<HTMLButtonElement>}
 */
const updateButtons = document.querySelectorAll(".update-cart");
for (const button of updateButtons) {
  button.addEventListener("click", function () {
    let productId = this.dataset.product;
    let action = this.dataset.action;
    let isAnonymous = user === 'AnonymousUser';
    console.log({ user, isAnonymous, productId, action });
    if(user === 'AnonymousUser') {
      console.log(`User not logged in.`)
    } else {
      console.log(`User is logged In.`)
    }
  });
}
