document.addEventListener('DOMContentLoaded', function() {

    const params = new URLSearchParams(window.location.search);
    const productID = params.get('productID');
  
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then(response => response.json())
      .then(data => {
        const productImage = document.getElementById('product-image');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');
        const productDescription = document.getElementById('product-description');
  
        productImage.src = data.image;
        productImage.alt = data.title;
        productName.textContent = data.title;
        productPrice.textContent = `$${data.price.toFixed(2)}`;
        productDescription.textContent = data.description;
      });
  });
  