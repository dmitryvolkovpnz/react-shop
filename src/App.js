import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import { Route, Routes } from "react-router";
import Orders from "./components/orders";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // пустой массив с товарами в корзине 
            orders: [],
            // массив с товаров в каталоге
            items: [
                {
                    id: 1,
                    title: 'Apple BYZ S852I',
                    img: 'Image(1).png',
                    star: '4.7',
                    price: '2927',
                    oldPrice: '3527 ₽',
                    count: 1
                },
                {
                    id: 2,
                    title: 'Apple EarPods',
                    img: 'Image(2).png',
                    star: '4.5',
                    price: '2327',
                    count: 1
                },
                {
                    id: 3,
                    title: 'Apple EarPods',
                    img: 'Image(3).png',
                    star: '4.5',
                    price: '2327',
                    count: 1
                },
                {
                    id: 4,
                    title: 'Apple AirPods',
                    img: 'Image(4).png',
                    star: '4.7',
                    price: '9527',
                    count: 1
                },
                {
                    id: 5,
                    title: 'GERLAX GH-04',
                    img: 'Image(5).png',
                    star: '4.5',
                    price: '6527',
                    count: 1
                },
                {
                    id: 6,
                    title: 'BOROFONE BO4',
                    img: 'Image(6).png',
                    star: '4.5',
                    price: '7527',
                    count: 1
                },
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)                    // Тут подключаем разрешение функции на взаимодействие с состояниями
        this.incrimentItem = this.incrimentItem.bind(this)              // Тут подключаем разрешение функции на взаимодействие с состояниями
        this.decrimentItem = this.decrimentItem.bind(this)              // Тут подключаем разрешение функции на взаимодействие с состояниями
        this.deleteItem = this.deleteItem.bind(this)                    // Тут подключаем разрешение функции на взаимодействие с состояниями
    }
    render() {
        return (

            <div className="wrapper">     
                   <Header orders={this.state.orders}/>
                    <Routes>
                        <Route path="/" element={<Items itemesHeadphone={this.state.itemesHeadphone} items={this.state.items} onAdd={this.addToOrder} /> } />
                        <Route path="/cart" element={<Orders orders={this.state.orders} incrimentItem={this.incrimentItem} decrimentItem={this.decrimentItem} deleteItem={this.deleteItem}/>}/>
                    </Routes>
                  <Footer />
            </div>
        )
    }

    // Функция отвечающая за добавление товара в корзину, 
    // также проверяет, есть ли данный товар в корзине, если нет, то ставит флаг и добавляет в корзину, 
    // и при каждом нажатии кнопки "Купить", функция увеличивает количество товара в корзине.
    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id){
                isInArray = true
                el.count++
            }
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }

    // Функция отвечающая за увеличение количества товаров в корзине, она получает сам товар, и увеличивает его количество на единицу.
    incrimentItem(item){
        item.count++;
        this.setState({orders: [...this.state.orders]});
    }

    // Функция отвечающая за уменьшение количества товаров в корзине, она получает сам товар, 
    // проверяет его количество, если оно больше 1, то уменьшает на 1 и возвращает измененный товар.
    decrimentItem(item){
        if(item.count > 1){
            item.count--;
        }
        this.setState({orders: [...this.state.orders]});
    }

    // Функция удаления товара из корзины 
    // (перебирает весь массив с товарами в корзине, кроме того, что передан в функцию).
    deleteItem(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
}

export default App;
