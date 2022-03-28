import s from './Header.module.scss';

import { Link } from 'react-router-dom';

import { Address } from '../../components/Address/Address';
import { Email } from '../../components/Email/Email';
import { Phone } from '../../components/Phone/Phone';

import logo from '../../img/logo-black.svg';

const Header = ({setModalActive}) => {
    return(
        <header>
            <div className="container">
                <div className={s.top}>
                    <div className={s.logo}>
                        <Link index to="/">
                            <img src={logo} width="182" height="82" alt="Логотип сервиса доставки суши Миюши" />
                        </Link>
                    </div>
                    <div className={s.contacts}>
                        <Address />	
                        <Email />
                        <Phone />
                    </div>
                    <button className="btn-call btn-call--header" onClick={() => setModalActive(true)}>Обрaтный звонок</button>
                </div>
            </div>
	    </header>
    );
}

export { Header };