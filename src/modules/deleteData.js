// Удаление данных из БД
const deleteData = () => {
    return fetch('https://o-zoneshop-default-rtdb.firebaseio.com/goods.json/24', {
            method: 'DELETE',          
        })
        .then((res) => res.json())
}

export default deleteData;