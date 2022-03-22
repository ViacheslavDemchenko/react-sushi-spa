import s from './Address.module.scss';

import mapTag from '../../img/icons/map.svg';

const Address = () => {
    return(
        <div className={s.address}>
            <img src={mapTag} width="12" height="16" alt="" />
            г. Курск, ул. Ленина, д. 30
        </div>
    );
}

export { Address };