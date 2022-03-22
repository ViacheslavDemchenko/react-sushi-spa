import s from './ModalThanks.module.scss';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';
import logo from '../../img/logo-black.svg';

const ModalThanks = ({modalThanksActive, setThanksModalActive}) => {
    
    return(
        <div className={modalThanksActive ? "modal active" : "modal"}>
            <div className={s.modalTop}>
                    <div className={s.logo}>
                        <img src={logo} width="182" height="82" alt="Логотип сервиса доставки суши Миюши" />
                    </div>
                    <div className={s.modalClose} onClick={() => setThanksModalActive(false)}>
                        <SvgGenerator id="close" fill="#000" />
                    </div>
                </div>
                <div className={s.modalText}>
                    <p>Спасибо! Ваша заявка принята!</p>
                    <p>Мы перезвоним вам в ближайщее время</p>
                </div>
        </div>
    );
}

export { ModalThanks };