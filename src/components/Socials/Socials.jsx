import s from './Socials.module.scss';
import { SvgGenerator } from '../../SvgGenerator/SvgGenerator';

const Socials = () => {
    return(
        <ul className={s.social}> 
            <li>
                <a className="social-list__link facebook" href="#!">
                    <SvgGenerator id='facebook' fill="#778899" />
                </a>
            </li>
            <li>
                <a className="social-list__link facebook" href="#!">
                    <SvgGenerator id='instagram' fill="#778899" />
                </a>
            </li>
            <li>
                <a className="social-list__link facebook" href="#!">
                    <SvgGenerator id='vk' fill="#778899" />
                </a>
            </li>
        </ul>
    );
}

export { Socials };