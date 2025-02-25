import React from "react";
import { Categories, Sort, Skeleton, PizzaBlock } from "../components";
const Home = () => {
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
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__grid">
                {items.length
                    ? items.map((pizza) => {
                          return (
                              <div key={pizza.id} className="content__grid-item">
                                  <PizzaBlock {...pizza} />
                              </div>
                          );
                      })
                    : [...new Array(6)].map((_, index) => (
                          <div className="content__grid-item">
                              <Skeleton key={index} />
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Home;
