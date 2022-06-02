// Фильтрация товаров по категориям
import getData from "./getData";
import renderGoods from "./renderGoods";
import {
    categoryFilter
} from "./filters";

const catalog = () => {
    const btnCatalog = document.querySelector(".catalog-button > button");
    const catalogModal = document.querySelector(".catalog");
    const catalogModalItems = document.querySelectorAll(".catalog li");

    let isOpen = false;

    // Вызов модального окна с категориями товаров
    btnCatalog.addEventListener("click", () => {
        isOpen = !isOpen;

        if (isOpen) {
            catalogModal.style.display = "block";
        } else {
            catalogModal.style.display = '';
        }
    });

    // Отображение товаров по категориям
    catalogModalItems.forEach((item) => {
        item.addEventListener("click", () => {
            const text = item.textContent;

            getData().then((data) => {
                renderGoods(categoryFilter(data, text));
            });
        });
    });
};

export default catalog;