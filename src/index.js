// Модуль взаимодействия с корзиной
import cart from "./modules/cart";

// Модуль взаимодействия с загрузкой начальной страницы
import load from "./modules/load";

// Модуль взаимодействия с товарами через поисковую строку
import search from "./modules/search";

// Модуль взаимодействия с товарами по каталогу с категориями
import catalog from "./modules/catalog";

// Модуль взаимодействия с товарами по цене
import prices from "./modules/prices";


cart();
load();
search();
catalog();
prices();