import s from './Nav.module.scss';

const Nav = () => {

    return(
        <ul className={s.nav}>
            <li>
                <a href="#!" id="sets" className={s.link}>Сеты</a>
            </li>
            <li>
                <a href="#!" id="wok" className={s.link}>Wok</a> 
            </li>
        </ul>
    );
}

export { Nav };