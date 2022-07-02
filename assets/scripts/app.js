import Cart from './components/Cart.js';
import ProductList from './components/ProductList.js';

class Shop {
  // при создании элемента задаём, куда он будет добавляться при рендере
  render() {
    this.cart = new Cart('app');
    this.cart.render();
    const productList = new ProductList('app');
    productList.render();
  }
}

// статические методы этого класса используются для
// связи отдельных компонентов в приложение
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

export default App;

App.init();
