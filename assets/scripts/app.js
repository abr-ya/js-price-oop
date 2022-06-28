class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class Cart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalEl.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.className = 'cart';
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    this.totalEl = cartEl.querySelector('h2');

    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Add to Cart');
    // используем static метод App, который завязали на метод корзины
    App.addProductToCart(this.product);
  }

  render () {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="this.productuct-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addToCartButton = prodEl.querySelector('button');
    addToCartButton.addEventListener('click', this.addToCart.bind(this));

    return prodEl;
  }
}

class ProductList {
  products = [
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

  constructor () {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodElement = productItem.render();
      prodList.append(prodElement);
    }

    return prodList;
  }
}

class Shop {
  render() {
    const appDiv = document.getElementById('app');

    this.cart = new Cart();
    const productList = new ProductList();
    appDiv.append(this.cart.render());
    appDiv.append(productList.render());
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart; // важно! после рендера
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
