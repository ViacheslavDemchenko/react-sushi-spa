import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getProducts } from '../../api';
import { PreloaderProduct } from '../../components/PreloaderProduct/PreloaderProduct';

import s from './Product.module.scss';


const Product = ({newId, category, addToBasket}) => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Скроллим страницу вверх при переходе на страницу Product
        getProducts().then(data => {
            setProduct(data[category][newId - 1])
        });
    }, [newId, category]);

    const {id, good, goodId, price, quantity, ingridients, description, quantityRolls} = product;
    
    const getIngridients = (ingridients) => {
        return ingridients.map(el => <li key={Math.floor(Math.random() * (1 - 100000)) + 1}>{el.name}: <span>{el.value}</span></li>);
    }

    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        const newProduct = {
            ...product,
            quantity: newQuantity
        };
        setProduct(newProduct);
    }

    const decrementQuantity = () => {
        const newQuantity = product.quantity - 1;
        const newProduct = {
            ...product,
            quantity: newQuantity >= 0 ? newQuantity : 0
        };
        setProduct(newProduct);
    }    

    return(
        <>
            {!product.id ? (
                <PreloaderProduct />
            ) : (
                <section className={s.product}>
                    <div className="container">
                        <h1>{product.good}</h1>
                        <div className={s.productWrap}>
                            <img src={product.img} width="400" height="200" alt="Суши" />
                            <div className={s.productInfo}>
                                <p className={s.productDescription}>
                                    {description}
                                </p>
                                <div className={s.productData}>
                                    <div>Количество роллов: <span>{quantityRolls} шт.</span></div>
                                    <div>Вес: <span>{product.weight} г</span></div>
                                    <div>Калории: <span>{product.kKal} кКал.</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={s.productHandle}>
                            <p className={s.productPrice}>Цена: {product.price}<sup className={s.productSup}>руб.</sup></p>
                            <div className={s.productNumber}>
                                <button className={s.productMinus} onClick={() => decrementQuantity(id)}>-</button>
                                <span>{product.quantity}</span>
                                <button className={s.productPlus} onClick={() => incrementQuantity(id)}>+</button>
                            </div>
                            <button 
                                className="btn btnCard btnCart" 
                                onClick={() => addToBasket({id, good, goodId, price, quantity})}
                                >
                                    В корзину
                            </button>
                        </div>
                        <div className={s.productComposition}>
                            <h2>Ингридиенты</h2>
                            <ul>
                                {getIngridients(ingridients)}
                            </ul>
                        </div>
                        <a className="btn btn-back" onClick={() => navigate(-1)}>Назад</a>
                    </div>
                </section>
            )}
        </>
    );
}

export { Product };