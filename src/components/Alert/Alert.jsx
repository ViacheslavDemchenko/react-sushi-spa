import { useEffect } from 'react';
import s from './Alert.module.scss';

function Alert(props) {
    const {name = '', closeAlert} = props;
    
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
    }, [name, closeAlert]);

    return ( 
        <div className={s.toastContainer}>{name} добавлен(ы) в корзину</div>
    );
}

export { Alert };