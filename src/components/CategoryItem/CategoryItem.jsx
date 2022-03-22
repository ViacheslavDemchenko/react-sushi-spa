import { Link } from 'react-router-dom';

import s from './CategoryItem.module.scss';

const CategoryItem = (props) => {
    const { name, nameRu, description, img } = props;

    return(
        <li className={s.card}>
            <div className={s.img}>
                <img src={img} width="263" height="228" alt={nameRu} />
            </div>
            <div className={s.cardContent}>
                <h3 className={s.title}>{nameRu}</h3>
                <div className={s.info}>{description}</div>
            </div>
            <div className={s.btns}>
                <Link to={`/category/${name}`} className={s.btn}>Показать</Link>
            </div>
        </li>
    );
}

export { CategoryItem };