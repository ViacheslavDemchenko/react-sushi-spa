import { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask'
import { ModalThanks } from '../ModalThanks/ModalThanks';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';

import s from './Modal.module.scss';

import logo from '../../img/logo-black.svg';

const Modal = ({modalActive, setModalActive, modalThanksActive, setThanksModalActive, cartActive}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле для имени не должно быть пустым!');
    const [phoneError, setPhoneError] = useState('Поле для телефона не должно быть пустым!');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || phoneError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }

        if (modalActive || modalThanksActive || cartActive) {
            const body = document.body;
            let div = document.createElement('div');
            div.style.width = `${50}px`;
            div.style.height = `${50}px`;
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            body.appendChild(div);
            // Полная ширина экрана минус ширина экрана без прокрутки
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            body.style.overflow = 'hidden';
            body.style.marginRight = `${scrollWidth}px`;
        } else {
            const body = document.body;
            body.style.overflow = '';
            body.style.marginRight = `${0}px`;
        }

        

    }, [nameError, phoneError, modalActive, modalThanksActive, cartActive]);

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setNameError('Имя должно быть больше 3 и меньше 30 символов');
        } else {
            setNameError('');
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        let reg = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/;

        if (!reg.test(String(e.target.value))) {
            setPhoneError('Некорректный номер телефона');
        } else {
            setPhoneError('');
        }
    }
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'modal-name':
                setNameDirty(true)
                break
            case 'modal-phone':
                setPhoneDirty(true)
                break
            default:
                return null
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data = { 
            name: name, 
            phone: phone
        }

        setTimeout(() => {
            setName('');
            setPhone('');
        }, 3000);

        setTimeout(() => {
            setModalActive(false);
        }, 4000);

        setTimeout(() => {
            setThanksModalActive(true);
        }, 5000);

        setTimeout(() => {
            setThanksModalActive(false);
        }, 8000);

        return console.log(JSON.stringify(data));
    }

    return(
        <>
            <div className={modalActive ? "modal active" : "modal"}>
                <div className={s.modalTop}>
                    <div className={s.logo}>
                        <img src={logo} width="182" height="82" alt="Логотип сервиса доставки суши Миюши" />
                    </div>
                    <div className={s.modalClose} onClick={() => setModalActive(false)}>
                        <SvgGenerator id="close" fill="#000" />
                    </div>
                </div>
                <form onSubmit={(e) => onSubmit(e)} className={s.modalForm} id="modal-form" method="POST" action="/">
                    <div className={s.inputWrap}>
                        <div className={s.input}>
                            {(nameDirty && nameError) && <span className={s.warning}>{nameError}</span>}
                            <input 
                                value={name} 
                                onChange={(e) => nameHandler(e)} 
                                onBlur={e => blurHandler(e)} 
                                type="text" 
                                name="modal-name" 
                                placeholder="Имя" 
                            />
                        </div>
                        <div className={s.input}>
                            {(phoneDirty && phoneError) && <span className={s.warning}>{phoneError}</span>}
                            <MaskedInput
                                mask={['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                onChange={(e) => phoneHandler(e)} 
                                onBlur={e => blurHandler(e)}
                                placeholder="Телефон"
                                guide={false}
                                value={phone}
                                type="text" 
                                name="modal-phone"
                            />
                        </div> 
                    </div>
                    <button disabled={!formValid} className={s.submit} type="submit">Отправить</button>
                </form>
            </div>
            <ModalThanks modalThanksActive={modalThanksActive} setThanksModalActive={setThanksModalActive} />
            {/* <Overlay modalActive={modalActive} modalThanksActive={modalThanksActive} /> */}
        </>
    );
}

export { Modal };