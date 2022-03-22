import s from './Page404.module.scss';

function Page404() {
    return(
        <section className={s.page404}>
            <div className="container">
                <h1>Страница не существует...</h1>
                <h2>404</h2>
            </div>
        </section>
    );
}

export { Page404 };