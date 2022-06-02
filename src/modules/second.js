import getData from "./getData";
import postData from "./postData";
import deleteData from "./deleteData";
import putData from "./putData";

const second = () => {
  const cartBtn = document.getElementById('cart')

  // deleteData().then((data) => {
  //   console.log(data);

  getData().then((data) => {
    console.log(data);
  })
}

export default second;