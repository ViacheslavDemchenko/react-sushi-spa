import { Link } from 'react-router-dom';

import { Socials } from '../../components/Socials/Socials';

import s from './Footer.module.scss';
import logo from '../../img/logo-white.svg';

const Footer = () => {
    return(
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footerWrap}>
                    <div className={s.footerTop}>
                        <Link to='/'>
                            <img src={logo} width="150" height="100" alt="Логотип сервиса доставки суши Миюши" />
                        </Link>	
                        <a href="#!" className={s.warning}>Соглашение на обработку персональных данных</a>   
                        <span className={s.logoText}>МИЮШИ ©<span> {new Date().getFullYear()}</span></span>
                    </div>
                    <Socials /> 
                    {/* <div className={s.footerBottom}>
                        <a href="#!" className={s.warning}>Соглашение на обработку персональных данных</a>   
                        <Socials /> 
                    </div>     */}
                </div>
            </div>
        </footer>
    );
}

export { Footer };