// Фильтрация товаров через блок фильтр
import getData from "./getData";
import renderGoods from "./renderGoods";
import {
    priceFilter,
    hotSaleFilter
} from "./filters";

// Фильтрация по цене
const prices = () => {
    const priceInputMin = document.getElementById("min");
    const priceInputMax = document.getElementById("max");

    const checkboxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    // Фильтрация по минимальном значении
    priceInputMin.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), priceInputMin.value, priceInputMax.value));
        });
    })

    // Фильтрация по максимальном значении
    priceInputMax.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), priceInputMin.value, priceInputMax.value));
        });
    })

    // Фильтрация по акции
    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) checkboxSpan.classList.add('checked');
        else checkboxSpan.classList.remove('checked');
    
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), priceInputMin.value, priceInputMax.value))
        });
    })
}

export default prices;