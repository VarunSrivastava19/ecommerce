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
    let isAnonymous = user === "AnonymousUser";
    console.log({ user, isAnonymous, productId, action });
    if (user === "AnonymousUser") {
      console.log(`User not logged in.`);
    } else {
      updateUserOrder(productId, action);
    }
  });
}

function updateUserOrder(productId, action) {
  console.log(
    `User logged in, ACTION ${action} was performed by User on PRODUCT ${productId}`
  );

  const url = "/update_item/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({
      productId,
      action,
    }),
  };
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}
