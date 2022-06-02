// Модуль взаимодействия с корзиной

import renderCart from "./renderCart";
import postDataCart from "./postDataCart";

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const goodsWrapper = document.querySelector(".goods");
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');

  // Открытие модального окна корзины
  const openCart = () => {
    const cart = localStorage.getItem("cart") ?
      JSON.parse(localStorage.getItem("cart")) : [];

    cartModal.style.display = "flex";

    renderCart(cart)

    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  }

  cartBtn.addEventListener('click', openCart);

  // Закрытие модального окна
  const closeCart = () => {
    cartModal.style.display = ''
  }

  cartCloseBtn.addEventListener('click', closeCart);

  // Добавление товара в корзину
  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem("goods"));
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];
      const goodItem = goods.find((item) => {
        return item.id === +key
      })

      cart.push(goodItem)

      localStorage.setItem('cart', JSON.stringify(cart))
    }

    count();
  });

  // Удаление товара из  корзины
  cartWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : [];
      const card = event.target.closest(".card");
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key
      })

      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      renderCart(cart);

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
    
    count();
  })

  // Оформление заказ (отправка запроса на сервер)
  cartSendBtn.addEventListener('click', async () => {
    const cart = localStorage.getItem("cart") ?
      JSON.parse(localStorage.getItem("cart")) : [];

    await postDataCart(cart).then(() => {
      localStorage.removeItem('cart');

      renderCart([]);

      cartTotal.textContent = 0;
    })

    count()
  })

  // Подсчет количества товаров в корзине
  const count = () => {
    const cartCounter = document.querySelector('.counter');

    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    cartCounter.textContent = cart.length;
  }
}

export default cart