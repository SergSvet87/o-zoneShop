// Подсчет количества товаров в корзине
const count = () => {
    const cartCount = document.querySelector('.counter');
    const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [];

    cartCount.textContent = cart.length;
}

export default count;