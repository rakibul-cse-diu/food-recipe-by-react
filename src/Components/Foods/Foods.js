import React from 'react';

const Foods = (props) => {
    const { strMeal, strMealThumb } = props.food;
    return (
        <div>
            <img src={strMealThumb} alt="" width={200} height={350} />
            <h4>{strMeal}</h4>
        </div>
    );
};

export default Foods;