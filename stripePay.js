window.onload = function () {
  var stripe = Stripe('pk_test_KtTL8u2weDiZ0vETn0Ssrn0k008aqWBuHC');

  const buy1 = document.querySelector('#buy1')
  buy1.addEventListener('click', () => {

    stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        { sku: 'sku_GvIozdfT0tGfEV', quantity: 1 }
      ],
      successUrl: 'http://localhost:8000/success.html',
      cancelUrl: 'http://localhost:8000/cancel.html',
    }).then(function (result) {
      console.log(result.error.message)
    });
  });
  const buy2 = document.querySelector('#buy2')
  buy1.addEventListener('click', () => {

    stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        { sku: 'sku_GvJkB1iF05LeOr', quantity: 1 }
      ],
      successUrl: 'http://localhost:8000/success.html',
      cancelUrl: 'http://localhost:8000/cancel.html',
    }).then(function (result) {
      console.log(result.error.message)
    });
  });
}