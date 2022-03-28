import Sticky from 'react-sticky-el';
import { NavLink } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';

import './MenuStick.scss';

const MenuStick = ({alertName, closeAlert, setCartActive, itemsCart}) => {
    return(
        <div className="menu-stick">
            <Sticky>
                <div className="container">
                    <nav className="mainNav">
                        <ul className="navList">
                            <li><NavLink activeclassname="active" to="/">Главная</NavLink></li>
                            <li><NavLink activeclassname="active" to="/about">О нас</NavLink></li>
                            <li><NavLink activeclassname="active" to="/contacts">Контакты</NavLink></li>
                            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
                        </ul>
                        <div className="cart" onClick={() => setCartActive(true)}>
                            <SvgGenerator id='cart' />
                            <span className="cartItems">{itemsCart}</span>
                        </div>
                    </nav>
                </div>
            </Sticky>
        </div>
    );
}

export { MenuStick };