import s from './AdvantagesItem.module.scss';

const AdvantagesItem = (props) => {
    const { icon, title } = props;

    return(
        <li className={s.item}>
            <img src={icon} width="70" height="70" alt="" />
            <p className={s.text}>{title}</p>
        </li>
    );
}

export { AdvantagesItem };