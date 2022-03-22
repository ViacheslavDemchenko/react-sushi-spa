import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';

// import { Nav } from '../../components/Nav/Nav';
// import { CardsList } from '../../components/CardsList/CardsList';
import { AdvantagesList } from '../../components/AdvantagesList/AdvantagesList';
import { Form } from '../../components/Form/Form';
import { Slider } from '../../components/Slider/Slider';
import { Preloader } from '../../components/Preloader/Preloader';
import { CategoryList } from '../../components/CategoryList/CategoryList';

const Home = ({modalThanksActive, setThanksModalActive}) => {
    const [catalog, setCatalog] = useState([]);
   
    useEffect(() => { 
        getAllCategories().then(data => {
            setCatalog(data.categories);
        });
    }, []);


    return(
        <>
            <Slider />
            <main>
                <section className="container">
                    {!catalog.length ? (
                        <Preloader />
                    ) : (
                        <CategoryList catalog={catalog} />
                    )}
                </section>
                <section>
                    <AdvantagesList />
                </section>
                <section>
                    <Form 
                        setThanksModalActive={setThanksModalActive}
                    />
                </section>
            </main>
        </>
    );
}

export { Home };