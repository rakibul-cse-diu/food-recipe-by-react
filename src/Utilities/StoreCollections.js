import { useEffect, useState } from "react";
import { addToLocalStorage } from "./storeLocalStore";

const StoreCollections = (id) => {

    addToLocalStorage(id);


    // const [collections, setCollections] = useState([]);

    // useEffect(()=>{
    //         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    //             .then(res => res.json())
    //             .then(data => {

    //             })
    // }, [id])
};

export default StoreCollections;