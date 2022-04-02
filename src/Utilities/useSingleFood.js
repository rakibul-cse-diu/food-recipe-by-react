import { useEffect, useState } from 'react';

const useSingleFood = (id) => {
    const [singleFood, setSingleFood] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setSingleFood(data.meals[0]))
    }, [id]);

    return [singleFood, setSingleFood];
};

export default useSingleFood;