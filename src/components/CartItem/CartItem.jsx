import s from './CartItem.module.scss'; 
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';


const CartItem = ({id, good, goodId, quantity, price, incrementQuantity, decrementQuantity, removeFromBasket}) => {

    return(
        <tr>
            <td>{good}</td>
            <td>
                <div className={s.number}>
                    <button className={s.minus} onClick={() => decrementQuantity(id)}>-</button>
                        {quantity}
                    <button className={s.plus} onClick={() => incrementQuantity(id)}>+</button>
                </div>
            </td>
            <td>{price} руб.</td>
            <td>{price * quantity} руб.</td>
            <td>
                <div className={s.close} onClick={() => removeFromBasket(goodId)}>
                    <SvgGenerator id="close" fill="#000" />
                </div>
            </td>
        </tr>
    );
}

export { CartItem };