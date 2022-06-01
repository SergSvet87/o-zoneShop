import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const prices = () => {
    const priceInputMin = document.getElementById("#min");
    const priceInputMax = document.getElementById("#max");

    priceInputMin.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, min));
        });
    })

    priceInputMax.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, max));
        });
    })
}

export default prices;