import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Foods = (props) => {
    console.log(props.food)
    const { strMeal, strMealThumb, strCategory, strInstructions, strIngredient1, strIngredient2, strIngredient3 } = props.food;
    return (
        <div className='flex flex-col justify-center items-center border-2 border-gray-300 rounded-md p-2 m-4 hover:scale-110 duration-700 hover:bg-orange-300'>
            <img className='w-full mb-4' src={strMealThumb} alt="" />
            <h4 className='font-semibold text-sm'>{strMeal}</h4>
            <span className='text-sm py-2'>Category: {strCategory}</span>
            <p className='text-xs'>Instructions: {strInstructions.slice(0, 200) + `...`}<button className='px-2 py-1 text-xs font-semibold underline rounded-md'>See Details</button></p>

            <div className='flex mt-3'>
                <button className='px-2 py-1 text-sm font-semibold border-2 border-slate-800 rounded-md'><FontAwesomeIcon icon={faBookmark} /> Save to collections</button>
            </div>

            <div className='flex py-4'>
                <button className='rounded-full bg-slate-400 text-slate-50 p-2 mx-1 text-xs'>{strIngredient1.slice(0, 7) + `...`}</button>
                <button className='rounded-full bg-slate-400 text-slate-50 p-2 mx-1 text-xs'>{strIngredient2.slice(0, 7) + `...`}</button>
                <button className='rounded-full bg-slate-400 text-slate-50 p-2 mx-1 text-xs'>{strIngredient3.slice(0, 7) + `...`}</button>
            </div>
        </div>
    );
};

export default Foods;