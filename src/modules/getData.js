// Получение списка всех объектов(товаров)
import search from "./search";

const getData = (str) => {
    return fetch(
        `https://o-zoneshop-default-rtdb.firebaseio.com/goods.json`
    )
    .then((response) => {
        return response.json()
    })
}

export default getData; 