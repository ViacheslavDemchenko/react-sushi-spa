import s from './Overlay.module.scss';

const Overlay = ({modalActive, modalThanksActive, cartActive}) => {

    return(
        <div className={(modalActive || modalThanksActive || cartActive) ? "overlay active" : "overlay"}></div>
    );
}

export { Overlay };