import s from './Email.module.scss';

import email from '../../img/icons/email.svg';

const Email = () => {
    return(
        <div className={s.email}>
            <a href="mailto:miyushi@contact.ru">
                <img src={email} width="12" height="9" alt="" />
                miyushi@contact.ru
            </a>
        </div>
    );
}

export { Email };