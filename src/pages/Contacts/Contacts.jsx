import s from './Contacts.module.scss';

import { YMap } from '../../components/YMap/YMap';
import { Info } from '../../components/Info/Info';

const Contacts = ({setModalActive={setModalActive}}) => {

    return(
        <section className={s.contacts}>
            <div className="container">
                <h1 className={s.title}>Контакты</h1>
                <div className={s.content}>
                    <Info setModalActive={setModalActive} />
                    <YMap />
                </div>
            </div>
        </section>
    );
}

export { Contacts };