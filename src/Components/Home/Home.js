import React, { useState } from 'react';
import useFoods from '../../Utilities/useFoods';
import Foods from '../Foods/Foods';

import "./Home.css";

const Home = () => {
    const [latter, setLatter] = useState("a");
    const [foods, setFoods] = useFoods(latter);
    const latt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "v", "w", "y"];

    return (
        <>
            <div className="foods-container p-4 grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center min-h-screen">
                {
                    foods[0] && foods.map(food => <Foods food={food} key={food.idMeal}></Foods>)
                }
            </div>

            <div className="pagination grid grid-cols-10 md:grid-cols-12 gap-1 p-4 md:px-40">

                {
                    latt.map((lat, index) => <button className="py-1" onClick={() => setLatter(lat)} key={index}>{lat}</button>)
                }

            </div>
        </>
    );
};

export default Home;