import { useEffect, useState } from 'react';

const useFoods = (latter) => {
    // const latters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "v", "w", "y"];
    const [foods, setFoods] = useState([]);

    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${latter}`)
            .then(res => res.json())
            .then(data => {
                let newFoods = data.meals;
                setFoods(newFoods);
            })
    }, [latter])

    return [foods, setFoods];
};

export default useFoods;