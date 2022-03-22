import { Link } from 'react-router-dom';

import React from 'react';
import s from './CardItem.module.scss';

const CardItem = (props) => {

    const { 
        id, 
        good, 
        goodId, 
        price, 
        quantity,
        quantityRolls, 
        weight, 
        kKal, 
        img, 
        isHit,
        discountValue,
        getItemById, 
        category, 
        incrementQuantity, 
        decrementQuantity, 
        addToBasket 
    } = props;

    return(
        <li className={s.card}>
            <div className={s.img}>
                <img src={img} width="263" height="228" alt="Суши" />
            </div>
            {isHit ? <span className={s.hit}>Хит</span> : null}
            {discountValue ? <span className={s.discount}>-{discountValue}%</span> : null}
            <h3 className={s.title}>{good}</h3>
            <div className={s.param}>
                <span>{quantityRolls} | </span>
                <span>{weight} | </span>
                <span>{kKal}</span>
            </div>
            <div className={s.info}>
                <p className={s.price}>{price}<sup className={s.sup}>руб.</sup></p>
                <div className={s.number}>
                    <button className={s.minus} onClick={() => decrementQuantity(id)}>-</button>
                    <span>{quantity}</span>
                    <button className={s.plus} onClick={() => incrementQuantity(id)}>+</button>
                </div>
            </div>
            <div className={s.btns}>
                <button 
                    className={s.btn}
                    onClick={() => addToBasket({id, good, goodId, price, quantity})}
                    >
                    В корзину
                </button>
                <Link to={`/${category}/product/${id}`} className={s.btn} onClick={() => getItemById(id)}>Подробнее</Link>
            </div>
        </li>
    );
}

export { CardItem };