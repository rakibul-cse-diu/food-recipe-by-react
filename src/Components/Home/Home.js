import React, { useState } from 'react';
import useFoods from '../../Utilities/useFoods';
import Foods from '../Foods/Foods';

import "./Home.css";

const Home = () => {
    const [latter, setLatter] = useState("a");
    const [foods, setFoods] = useFoods(latter);
    //const [nextPrev, setNextPrev] = useState(false);
    //var count = 22;
    const latt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "v", "w", "y"];

    console.log(foods)

    // const handlePagination = (val) => {
    //     setLatter(val);
    //     count = 22;
    // }

    return (
        <>
            {
                foods[0] && foods.map(food => <Foods food={food} key={food.idMeal}></Foods>)
            }

            <div className="pagination grid grid-cols-10 md:grid-cols-12 gap-1 p-2">

                {
                    latt.map(lat => <button className="px-4 py-1 bg-slate-300" onClick={() => setLatter(lat)}>{lat}</button>)
                }

            </div>
        </>
    );
};

export default Home;