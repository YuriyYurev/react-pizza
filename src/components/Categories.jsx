import React from "react";

export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = [
        {
            id: 0,
            name: "Все",
        },
        {
            id: 1,
            name: "Мясные",
        },
        {
            id: 2,
            name: "Вегетарианская",
        },
        {
            id: 3,
            name: "Гриль",
        },
        {
            id: 4,
            name: "Острые",
        },
        {
            id: 5,
            name: "Закрытые",
        },
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={category.id}
                        onClick={() => setActiveIndex(index)}
                        className={activeIndex === index ? "active" : ""}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
