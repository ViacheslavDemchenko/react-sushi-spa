import s from './AdvantagesList.module.scss';

import { AdvantagesItem } from '../AdvantagesItem/AdvantagesItem';

import kitchenIcon from '../../img/icons/kitchen.svg';
import dishIcon from '../../img/icons/dish.svg';
import moneyIcon from '../../img/icons/money.svg';
import riceIcon from '../../img/icons/rice.svg';
import ostopusIcon from '../../img/icons/ostopus.svg';
import knifeIcon from '../../img/icons/knife.svg';
import pizzaIcon from '../../img/icons/pizza.svg';
import likeIcon from '../../img/icons/like.svg';
import fishIcon from '../../img/icons/fish.svg';
import featherIcon from '../../img/icons/feather.svg';

const AdvantagesList = () => {
    const state = [
        {icon: kitchenIcon, title: '100% ручная работа'},
        {icon: dishIcon, title: '100% свежие ингредиенты'},
        {icon: moneyIcon, title: 'Самые низкие цены на рынке! (Нет ресторанной наценки)'},
        {icon: riceIcon, title: 'Мы используем только дорогой рис из Японии'},
        {icon: ostopusIcon, title: 'Больше начинки, меньше риса!'},
        {icon: knifeIcon, title: 'Мы не заменяем авокадо огурцом!'},
        {icon: pizzaIcon, title: 'Вся пицца готовится из итальянской муки и Итальянского соуса'},
        {icon: likeIcon, title: 'Постоянный контроль качества на всех этапах'},
        {icon: fishIcon, title: 'Только охлажденная рыба (никакой заморозки)'},
        {icon: featherIcon, title: 'Мы не используем майонез!'}
    ]
    return(
        <div className="container">
            <h2 className={s.title}>10 причин купить у нас</h2>	
            <ul className={s.list}> 
                {
                    state.map(item => (
                        <AdvantagesItem key={item.icon} icon={item.icon} title={item.title} />
                        // <li className={s.item}>
                        //     <img src={item.icon} width="70" height="70" alt="" />
                        //     <p className={s.text}>{item.title}</p>
                        // </li>
                    ))
                }
            </ul>
        </div>
    );
}

export { AdvantagesList };