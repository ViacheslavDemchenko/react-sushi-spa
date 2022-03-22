import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts } from '../../api';

import { Preloader } from '../../components/Preloader/Preloader';
import { CardsList } from '../../components/CardsList/CardsList';

import s from './Category.module.scss';

const Category = ({getCategory, getItemById, category, addToBasket}) => {
    const {name} = useParams();
    const [catalog, setCatalog] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getProducts().then(data => {
            setCatalog(data[name]);
            getCategory(name);
        });
    }, [name, getCategory]);

    const incrementQuantity = (itemId) => {
        const newCatalog = catalog.map(el => {
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
        setCatalog(newCatalog);
      }
    
    const decrementQuantity = (itemId) => {
        const newCatalog = catalog.map(el => {
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
        setCatalog(newCatalog);
    }

    const filteredGoods = catalog.filter(el => {
        return el.good.toLowerCase().includes(search.toLowerCase());
    });

    return(
        <>
            <div className="container">
                <form className={s.searchForm}>
                    <input 
                        type="text"  
                        placeholder="Введите название товара..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            {!catalog.length 
                ? 
            <Preloader /> 
                : 
            <CardsList 
                catalog={catalog} 
                getItemById={getItemById} 
                category={category} 
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                addToBasket={addToBasket}
                filteredGoods={filteredGoods}
            />}
        </>
    );
}

export { Category };