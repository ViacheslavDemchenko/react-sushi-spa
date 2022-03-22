import s from './PreloaderProduct.module.scss';

function PreloaderProduct() {
    return(
        <section className={s.section}>
            <div className="container">
                <h2 className={s.title}>Loading...</h2>
            </div>
        </section>
    );
}

export { PreloaderProduct }