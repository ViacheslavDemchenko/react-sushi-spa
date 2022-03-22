import { Address } from '../../components/Address/Address';
import { Email } from '../../components/Email/Email';
import { Phone } from '../../components/Phone/Phone';
import { Socials } from '../../components/Socials/Socials';

import s from './Info.module.scss';

const Info = ({setModalActive}) => {
    return(
        <div className={s.info}>
            <div className={s.infoTitle}>Ждем вас по адресу</div>
            <Address />
            <div className={s.infoTitle}>Мы в соцсетях</div>
            <Socials />
            <div className={s.infoTitle}>Наш телефон</div>
            <Phone />
            <div className={s.infoTitle}>Email</div>
            <Email />
            <div style={{marginTop: '2rem'}}>
                <button className="btn-call" onClick={() => setModalActive(true)}>Обрaтный звонок</button>
            </div>
        </div>
    );
}

export { Info };