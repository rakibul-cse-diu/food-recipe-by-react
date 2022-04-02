import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleFood from '../../Utilities/useSingleFood';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = () => {
    const { id } = useParams();
    const [singleFood, setSingleFood] = useSingleFood(id);

    const {
        idMeal,
        strMeal,
        strMealThumb,
        strCategory,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20
    } = singleFood;

    return (
        <div className='flex flex-col justify-center items-center py-8 px-4 md:px-40'>
            <img src={strMealThumb} alt="" />
            <h1 className='text-3xl mt-6 font-bold'>{strMeal}</h1>
            <p className='text-md mt-4 mb-4'><span className='font-bold text-2xl block'>Instructions: </span>{strInstructions}</p>
            <span className='text-2xl font-bold block self-start mb-4'>Ingredients: </span>

            <table className="border-collapse border border-white w-full text-slate-300 text-center mb-4">
                <thead>
                    <tr>
                        <th className="border border-white bg-slate-700 py-4 text-xl">Ingredient</th>
                        <th className="border border-white bg-slate-700 py-4 text-xl">Amounts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        strIngredient1 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient1}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure1}</td>
                        </tr>
                    }
                    {
                        strIngredient2 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient2}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure2}</td>
                        </tr>
                    }
                    {
                        strIngredient3 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient3}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure3}</td>
                        </tr>
                    }
                    {
                        strIngredient4 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient4}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure4}</td>
                        </tr>
                    }
                    {
                        strIngredient5 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient5}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure5}</td>
                        </tr>
                    }
                    {
                        strIngredient6 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient6}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure6}</td>
                        </tr>
                    }
                    {
                        strIngredient7 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient7}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure7}</td>
                        </tr>
                    }
                    {
                        strIngredient8 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient8}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure8}</td>
                        </tr>
                    }
                    {
                        strIngredient9 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient9}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure9}</td>
                        </tr>
                    }
                    {
                        strIngredient10 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient10}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure10}</td>
                        </tr>
                    }
                    {
                        strIngredient11 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient11}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure11}</td>
                        </tr>
                    }
                    {
                        strIngredient12 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient12}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure12}</td>
                        </tr>
                    }
                    {
                        strIngredient13 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient13}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure13}</td>
                        </tr>
                    }
                    {
                        strIngredient14 &&
                        <tr>
                            <td className="border bg-slate-500 border-white py-4">{strIngredient14}</td>
                            <td className="border bg-slate-500 border-white py-4">{strMeasure14}</td>
                        </tr>
                    }
                    {
                        strIngredient15 &&
                        <tr>
                            <td className="border bg-slate-600 border-white py-4">{strIngredient15}</td>
                            <td className="border bg-slate-600 border-white py-4">{strMeasure15}</td>
                        </tr>
                    }
                    {
                        strIngredient16 &&
                        <tr>
                            <td className="border bg-slate-500 border-white">{strIngredient16}</td>
                            <td className="border bg-slate-500 border-white">{strMeasure16}</td>
                        </tr>
                    }
                    {
                        strIngredient17 &&
                        <tr>
                            <td className="border bg-slate-600 border-white">{strIngredient17}</td>
                            <td className="border bg-slate-600 border-white">{strMeasure17}</td>
                        </tr>
                    }
                    {
                        strIngredient18 &&
                        <tr>
                            <td className="border bg-slate-500 border-white">{strIngredient18}</td>
                            <td className="border bg-slate-500 border-white">{strMeasure18}</td>
                        </tr>
                    }
                    {
                        strIngredient19 &&
                        <tr>
                            <td className="border bg-slate-600 border-white">{strIngredient19}</td>
                            <td className="border bg-slate-600 border-white">{strMeasure19}</td>
                        </tr>
                    }
                    {
                        strIngredient20 &&
                        <tr>
                            <td className="border bg-slate-500 border-white">{strIngredient20}</td>
                            <td className="border bg-slate-500 border-white">{strMeasure20}</td>
                        </tr>
                    }
                </tbody>
            </table>

            <button className='px-4 py-2 m-4 text-3xl font-semibold border-2 border-orange-500 rounded-md duration-200 hover:text-orange-500'><FontAwesomeIcon icon={faBookmark} /> Save to collections</button>

        </div>
    );
};

export default FoodDetails;