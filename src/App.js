import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import React from "react";

// https://67af4efadffcd88a678647ea.mockapi.io/items

function App() {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        let isSubscribed = true;

        const fetchData = async () => {
            const reponse = await fetch("https://67af4efadffcd88a678647ea.mockapi.io/items");
            const data = await reponse.json();
            if (isSubscribed) {
                setItems(data);
            }
        };

        fetchData().catch(console.error);

        return () => (isSubscribed = false);
    }, []);

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__grid">
                            {items.length ? items.map((pizza) => {
                                return (
                                    <div key={pizza.id} className="content__grid-item">
                                        <PizzaBlock {...pizza} />
                                    </div>
                                );
                            }) : 'Загрузка'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
