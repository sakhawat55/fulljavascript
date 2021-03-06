const stripe = Stripe('pk_test_RUW6xxFOkCVI4NDV2pGD7Sbr');

function checkout() {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{
      sku: 'sku_F1INse7ZB79EZ9',
      quantity: 1,
    }],

    // Note that it is not guaranteed your customers will be redirected to this
    // URL *100%* of the time, it's possible that they could e.g. close the
    // tab between form submission and the redirect.
    successUrl: 'https://fulljavascript.netlify.com/success.html',
    cancelUrl: 'https://fulljavascript.netlify.com',
  }).then((result) => {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      const displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
}

// ES6
const elements = document.getElementsByClassName('checkout-button-sku_F1INse7ZB79EZ9');
Array.from(elements).forEach(el => el.addEventListener('click', checkout));

