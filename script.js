const render = () => {
  class ItemShop {
    constructor(id, title, price, description, category, image) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.category = category;
      this.image = image;
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(":( error", error);
      return [];
    }
  };

  const renderProducts = async () => {
    const productList = document.getElementById("product-list");

    const products = await fetchProducts();

    products.forEach((productData) => {
      const product = new ItemShop(
        productData.id,
        productData.title,
        productData.price,
        productData.description,
        productData.category,
        productData.image
      );

      const productItem = document.createElement("li");
      productItem.classList.add("product-item");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;

      const title = document.createElement("h2");
      title.classList.add("product-item__title");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.classList.add("product-item__price");
      price.textContent = `$${product.price.toFixed(2)}`;

      const buyButton = document.createElement("button");
      buyButton.classList.add("product-item__button");
      buyButton.textContent = "Comprar Ahora";

      productItem.appendChild(productImage);
      productItem.appendChild(title);
      productItem.appendChild(price);
      productItem.appendChild(buyButton);

      productList.appendChild(productItem);
    });
  };

  renderProducts();
};
window.onload = render;
