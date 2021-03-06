import App from '../app.js';
import { Component, ElementAttribute } from '../Component.js';

class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookID) {
    super(renderHookID, false); // не вызываем рендер сразу!
    this.product = product;
    this.render(); // рендерим, когда продукт есть!
  }

  addToCart() {
    console.log('Add to Cart');
    // используем static метод App, который завязали на метод корзины
    App.addProductToCart(this.product);
  }

  render () {
    const prodEl = this.createElement('li', 'product-item');
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addToCartButton = prodEl.querySelector('button');
    addToCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [];

  constructor (renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list-id');
    }
  }

  render() {
    this.createElement(
      'ul',
      'product-list',
      [new ElementAttribute('id', 'prod-list-id')]
    );
    if (this.products && Array.isArray(this.products)) renderProducts(this.products);
  }
};

export default ProductList;
