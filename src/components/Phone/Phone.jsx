import s from './Phone.module.scss';

import phone from '../../img/icons/phone.svg';

const Phone = () => {
    return(
        <div>
            <div className={s.phone}>
                <a href="tel:+79999999999">+7(999)999-99-99
                    <img src={phone} width="20" height="20" alt="" />
                </a>
            </div>
            <div className={s.time}>Работаем с 11.00 до 23.00</div>
        </div>
    );
}

export {Phone };