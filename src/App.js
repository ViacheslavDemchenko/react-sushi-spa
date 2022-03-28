import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contacts } from './pages/Contacts/Contacts';
import { Page404 } from './pages/Page404/Page404';
import { Product } from './pages/Product/Product';
import { CartList } from './components/CartList/CartList';
import { Modal } from './components/Modal/Modal';
import { Category } from './pages/Category/Category';
import { Overlay } from './components/Overlay/Overlay';
import { MenuStick } from './components/MenuStick/MenuStick';

import './App.scss';

function App() {
  const [newId, setNewId] = useState();
  const [category, setCategory] = useState();
  const [order, setOrder] = useState([]);
  const [itemsCart, setItemsCart] = useState(0);
  const [cartActive, setCartActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalThanksActive, setThanksModalActive] = useState(false);
  const [alertName, setAlertName] = useState('');

  const getItemById = (id) => {
    setNewId(id);
  }

  const getCategory = (category) => {
    setCategory(category);
  }

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.goodId === item.goodId);
    if (itemIndex < 0 && item.quantity !== 0) {
      const newItem = {
        ...item,
        quantity: item.quantity
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex && item.quantity !== 0) {
            return {
                ...orderItem,
                quantity: orderItem.quantity + item.quantity,
            };
        } else {
            return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(`${item.good} ${item.quantity} шт.`);
  };

  const incrementQuantity = (itemId) => {
    const newOrder = order.map(el => {
        if(el.id === itemId) {
            const newCount = el.quantity + 1;
            return {
                ...el,
                quantity: newCount
            }
        } else {
            return el;
        }
    });
    setOrder(newOrder);
  }

  const decrementQuantity = (itemId) => {
    const newOrder = order.map(el => {
        if(el.id === itemId) {
          const newCount = el.quantity - 1;
          return {
              ...el,
              quantity: newCount >= 0 ? newCount : 0
          }
        } else {
            return el;
        }
    });
    setOrder(newOrder);
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.goodId !== itemId);
    setOrder(newOrder);
  }

  const getTotalItems = (itemCount) => {
    setItemsCart(itemCount);
  }

  const closeAlert = () => {
    setAlertName('');
  }

  return (
    <div className="App container-fluid">
      <Header setModalActive={setModalActive} />
      <MenuStick 
        alertName={alertName} 
        closeAlert={closeAlert} 
        setCartActive={setCartActive} 
        itemsCart={itemsCart} 
      />
      <Routes>
        <Route path="/" element={<Home setThanksModalActive={setThanksModalActive} />} />
        <Route path="/react-sushi-spa" element={<Home setThanksModalActive={setThanksModalActive} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts setModalActive={setModalActive} />} />
        <Route 
          path="/category/:name" 
          element={
            <Category 
              getCategory={getCategory} 
              getItemById={getItemById} 
              category={category}
              addToBasket={addToBasket}
            />
          } 
        />
        <Route 
          path={`/${category}/product/:id`} 
          element={
            <Product 
              newId={newId} 
              category={category} 
              incrementQuantity={incrementQuantity} 
              decrementQuantity={decrementQuantity}
              addToBasket={addToBasket}
              order={order} 
              setOrder={setOrder}
            />
          } 
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
      <CartList 
        cartActive={cartActive} 
        setCartActive={setCartActive} 
        order={order} 
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromBasket={removeFromBasket}
        getTotalItems={getTotalItems}
      />
      <Modal 
        modalActive={modalActive} 
        setModalActive={setModalActive} 
        modalThanksActive={modalThanksActive} 
        setThanksModalActive={setThanksModalActive}
        cartActive={cartActive}
      />
      <Overlay cartActive={cartActive} modalActive={modalActive} modalThanksActive={modalThanksActive}  />
    </div>
  );
}

export default App;
