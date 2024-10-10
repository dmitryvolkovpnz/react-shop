import React, {useState} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/catalog/Items";
import { Route, Routes } from "react-router";
import Orders from "./components/card/orders";
import Detail from "./components/catalog/Detail";
import Booking from "./components/order/Booking";

function App() {
    const [order, setOrder] = useState([]);
    const items = [
        {
            id: 1,
            title: 'Apple BYZ S852I',
            img: 'Image(1).png',
            star: '4.7',
            descripton: 'Гарнитура Apple EarPods A3046 белый, вкладыши, крепление в ушной раковине, проводные, прямой коннектор, кабель 1.1м, регулятор громкости на проводе, микрофон на проводе (MTJY3ZM/A)',
            price: '2927',
            oldPrice: '3527 ₽',
            count: 1
        },
        {
            id: 2,
            title: 'Apple EarPods',
            img: 'Image(2).png',
            star: '4.5',
            descripton: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция новых наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей.',
            price: '2327',
            count: 1
        },
        {
            id: 3,
            title: 'Apple EarPods',
            img: 'Image(3).png',
            star: '4.5',
            descripton: 'Наушники EarPods оснащены встроенным пультом, с помощью которого можно регулировать громкость, управлять воспроизведением музыки и видео и принимать или завершать звонки одним нажатием.',
            price: '2327',
            count: 1
        },
        {
            id: 4,
            title: 'Apple AirPods',
            img: 'Image(4).png',
            star: '4.7',
            descripton: 'AirPods — лёгкие наушники, форма которых была оптимизирована для более плотной посадки. Наушники расположены под оптимальным углом для максимального комфорта и наилучшего звучания. Ножка у них стала на 33% короче, чем у AirPods (2 го поколения), а встроенный в неё датчик нажатия позволяет управлять воспроизведением музыки и звонками.',
            price: '9527',
            count: 1
        },
        {
            id: 5,
            title: 'GERLAX GH-04',
            img: 'Image(5).png',
            star: '4.5',
            descripton: 'Наушники доступны в белом и черном цветах. Сами наушники содержат силиконовые насадки, подходящие для каждого уха. Преимуществом также является повышенная устойчивость к воде и пыли даже IP 55, что особенно оценят меломаны при занятиях спортом.',
            price: '6527',
            count: 1
        },
        {
            id: 6,
            title: 'BOROFONE BO4',
            img: 'Image(6).png',
            star: '4.5',
            descripton: 'Беспроводные наушники представляют собой стильное и функциональное решение для любителей качественного звука. Наушники оснащены Bluetooth 5.3, что обеспечивает стабильное и быстрое подключение к различным устройствам. Версия Bluetooth гарантирует высокую скорость передачи данных и надежность соединения.',
            price: '7527',
            count: 1
        },
    ];
    const [showDetailItem, setShowDetailItem] = useState(false);
    const [detailItem, setDetailItem] = useState({});



    // Функция отвечающая за добавление товара в корзину, 
    // также проверяет, есть ли данный товар в корзине, если нет, то ставит флаг и добавляет в корзину, 
    // и при каждом нажатии кнопки "Купить", функция увеличивает количество товара в корзине.
    const addToOrder = (items) => {
        let isInArray = false
        order.forEach(el => {
            if (el.id === items.id){
                isInArray = true
                el.count++
            }
        })
        if (!isInArray)
            setOrder([...order, items])
    }

    // Функция отвечающая за увеличение количества товаров в корзине, она получает сам товар, и увеличивает его количество на единицу.
    const incrimentItem = (items) => {
        items.count++;
        setOrder([...order]);
    }

    // Функция отвечающая за уменьшение количества товаров в корзине, она получает сам товар, 
    // проверяет его количество, если оно больше 1, то уменьшает на 1 и возвращает измененный товар.
    const decrimentItem = (items) => {
        if(items.count > 1){
            items.count--;
        }
        setOrder([...order]);
    }

    // Функция удаления товара из корзины 
    // (перебирает весь массив с товарами в корзине, кроме того, что передан в функцию).
    const deleteItem = (id) => {
        setOrder(order.filter(el => el.id !== id))
    }

    const onDetail = (items) => {
        setDetailItem(items)
        setShowDetailItem(!showDetailItem)
    }

    return (

        <div className="wrapper">
            <Header orders={order}/>
            <Routes>
                <Route path="/" element={<Items showDetailItem={showDetailItem} items={items} onAdd={addToOrder} onDetail={onDetail}/> } />
                <Route path="/cart" element={<Orders orders={order} incrimentItem={incrimentItem} decrimentItem={decrimentItem} deleteItem={deleteItem}/>}/>
                <Route path="/booking" element={<Booking orders={order} />} />
            </Routes>
            {showDetailItem && <Detail item={detailItem} onAdd={addToOrder} onDetail={onDetail}/>}
            <Footer />
        </div>
    )

}

export default App;
