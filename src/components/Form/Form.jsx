import { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask'
import s from './Form.module.scss';

const Form = ({setThanksModalActive}) => {
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

    }, [nameError, phoneError]);

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
            setThanksModalActive(true);
        }, 4000);

        setTimeout(() => {
            setThanksModalActive(false);
        }, 8000);

        return console.log(JSON.stringify(data));
    }

    return(
        <section className={s.form}>
            <div className={s.formWrap}>
                <div className="container">
                    <div>
                        <p className={s.subtitle}>Есть вопросы?</p>
                        <h2 className={s.title}>Оставьте свои контакты</h2>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className={s.mainForm} id="main-form" method="POST" action="/">
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
                    <p className={s.text}>
                        Нажимая на кнопку «Отправить», вы даете согласие на обработку своих персональных данных.
                    </p>
                </div>
            </div>
        </section>
    );
}

export { Form };