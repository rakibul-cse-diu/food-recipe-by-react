import { useEffect, useState } from 'react';

const useFoods = (latter) => {
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