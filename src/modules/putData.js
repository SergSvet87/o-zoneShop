const putData = () => {
  return fetch('https://o-zoneshop-default-rtdb.firebaseio.com/goods.json/24', {
          method: 'PUT',
          body: JSON.stringify({
              id: 24,
              title: "Ведьмак 3",
              price: 3000,
              sale: true,
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HmN6DtREtYb7xr4doYat3dBSCW3mrW7C1Q&usqp=CAU",
              category: "Игры и софт"
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      })
      .then((res) => res.json())
}

export default putData;