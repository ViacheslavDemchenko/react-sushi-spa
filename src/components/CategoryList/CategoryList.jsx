import { CategoryItem } from '../CategoryItem/CategoryItem';

import s from './CategoryList.module.scss';

const CategoryList = ({catalog = []}) => {
    return(
        <section className={s.menu}>
            <h2 className={s.title}>Меню</h2>
            <ul className={s.list}>
                {catalog.map(el => (
                    <CategoryItem key={el.idCategory} {...el} />
                ))}
            </ul>
        </section>
    );
}

export { CategoryList };