const deleteData = () => {
    return fetch('https://o-zoneshop-default-rtdb.firebaseio.com/goods.json', {
            method: 'DELETE',          
        })
        .then((res) => res.json())
}

export default deleteData;