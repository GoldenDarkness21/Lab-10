const render = () => {

// Function to fetch product data from the provided API
const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        return [];
    }
};

// Function to render products on the page
const renderProducts = async () => {
    const productList = document.getElementById('product-list');
    
    const products = await fetchProducts();

    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.classList.add('product-item');
        
        const productImage = document.createElement('img');
        productImage.src = product.image; // Asigna la URL de la imagen del producto
        productImage.alt = product.title; // Proporciona un texto alternativo para la imagen

        const title = document.createElement('h2');
        title.classList.add('product-item__title');
        title.textContent = product.title;
        
        const price = document.createElement('p');
        price.classList.add('product-item__price');
        price.textContent = `$${product.price.toFixed(2)}`;
        
        const buyButton = document.createElement('button');
        buyButton.classList.add('product-item__button');
        buyButton.textContent = 'Comprar Ahora';

        productItem.appendChild(productImage);
        productItem.appendChild(title);
        productItem.appendChild(price);
        productItem.appendChild(buyButton);

        productList.appendChild(productItem);
    });
};

// Call the renderProducts function to populate the product list
renderProducts();

renderProducts();

}
window.onload = render;