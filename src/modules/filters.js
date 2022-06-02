// Модуль фильтрации всех объектов согласно запроса

// Фильтрация товаров в строке поиска
export const searchFilter = (goods, value) => {
    
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

// Фильтрация товаров по категориям
export const categoryFilter = (goods, value) => {
    
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    })
}

// Фильтрация товаров по цене
export const priceFilter = (goods, min, max) => {
    
    return goods.filter((goodsItem) => {
        if(min === '' && max === ''){

        }else if(min !== '' && max !== ''){

        }else if(min !== '' && max === ''){

        }else if(min === '' && max !== ''){

        }
    })
}