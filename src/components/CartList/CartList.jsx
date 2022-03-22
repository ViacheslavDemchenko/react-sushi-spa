import { useEffect } from 'react';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';
import React from 'react';

import { CartItem } from '../CartItem/CartItem';

import s from './CartList.module.scss';

import logo from '../../img/logo-black.svg';

const CartList = ({
        cartActive, 
        setCartActive, 
        order = [], 
        incrementQuantity, 
        decrementQuantity, 
        removeFromBasket, 
        getTotalItems
    }) => {
    
        let warning;

    const getTotalSum = (order) => {
        let itemSum = 0;
        let totalSum = 0;

        order.map(el => {
            itemSum = el.price * el.quantity;
            totalSum += itemSum;

            return {
                itemSum,
                totalSum
            }
        });

        return totalSum;
    }

    useEffect(() => {
        const totalItemsCount = (order) => {
            let itemSum = 0;
        
            order.map(el => {
                return itemSum += el.quantity;
            });

            return getTotalItems(itemSum);
        }
        totalItemsCount(order);
    }, [order, getTotalItems]);

    const cartHandler = () => {
        const cartSum = {
            "total": getTotalSum(order),
            "order": order
        }

        return console.log(JSON.stringify(cartSum));
    }

    return(
        <>
            <div className={cartActive ? "cartList active" : "cartList"}>
                <div className={s.cartTop}>
                    <div className={s.logo}>
                        <img src={logo} width="182" height="82" alt="Логотип сервиса доставки суши Миюши" />
                    </div>
                    <div className={s.cartClose} onClick={() => setCartActive(false)}>
                        <SvgGenerator id="close" fill="#000" />
                    </div>
                </div>
                <div className={s.cartBody}>
                    <table>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Количество</th>
                                <th>Цена</th>
                                <th>Сумма</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            order.length ? order.map(item => (
                                <CartItem 
                                    key={item.goodId} 
                                    {...item} 
                                    incrementQuantity={incrementQuantity}
                                    decrementQuantity={decrementQuantity}
                                    removeFromBasket={removeFromBasket}
                                />
                            )) : warning = true
                        }
                        </tbody>
                    </table>
                    {warning ? <div className={s.warning}>Корзина пуста</div> : null}
                </div>
                <div className={s.cartBottom}>
                    <div className={s.total}>Общая сумма заказа: {getTotalSum(order)} руб.</div>
                    <button onClick={() => cartHandler()} className="btn btn-cart">Сделать заказ</button>
                </div>
            </div>
        </>
    );
}

export { CartList };