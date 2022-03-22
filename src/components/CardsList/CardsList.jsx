import { useNavigate } from 'react-router-dom';

import { CardItem } from '../CardItem/CardItem';
import s from './CardsList.module.scss';

const CardsList = ({filteredGoods = [], getItemById, category, incrementQuantity, decrementQuantity, addToBasket}) => {
    const navigate = useNavigate();
  
    return(
        <section className={s.category}>
            <div className="container">
                <ul className={s.cards}>
                    {filteredGoods.map(card => (
                        <CardItem 
                            key={card.goodId} 
                            {...card} 
                            getItemById={getItemById} 
                            category={category}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                            addToBasket={addToBasket}
                        />
                    ))}
                </ul>
                <a className="btn btn-back" onClick={() => navigate(-1)}>Назад</a>
            </div>
        </section>
    );
}

export { CardsList };