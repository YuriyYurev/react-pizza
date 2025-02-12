import React from "react";
import { v4 as uuidv4 } from "uuid";

const PizzaBlock = ({ category, id, imageUrl, price, rating, sizes, title, types }) => {
    const sizesList = sizes.map((size) => {
        return {
            id: uuidv4(),
            value: size,
        };
    });
    const typesList = [
        {
            id: uuidv4(),
            name: "тонкое",
        },
        {
            id: uuidv4(),
            name: "традиционное",
        },
    ];

    const [activeSizeIndex, setActiveSizeIndex] = React.useState(0)
    const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt={title} />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {sizesList.map((size, index) => {
                        return (
                            <li
                                key={size.id}
                                className={activeSizeIndex === index ? 'active' : ''}
                                onClick={() => setActiveSizeIndex(index)}
                            >{size.value} см.</li>
                        )
                    })}
                </ul>
                <ul>
                    {types.map((type, index) => {
                        return (
                            <li
                                key={typesList[index].id}
                                className={activeTypeIndex === index ? "active" : ""}
                                onClick={() => setActiveTypeIndex(type)}
                            >
                                {typesList[index].name}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button type="button" className="button button--outline button--add">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;
