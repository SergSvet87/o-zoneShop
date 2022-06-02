// Загрузка первоначальной страницы
import getData from './getData';
import renderGoods from './renderGoods';

import postData from './postData';
import putData from './putData';
import deleteData from './deleteData';

const load = () => {
    getData().then((data) => {
        renderGoods(data);
    })
}

export default load;