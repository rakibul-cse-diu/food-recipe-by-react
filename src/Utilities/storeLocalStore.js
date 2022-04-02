const addToLocalStorage = (id) => {
    let collections;
    const storedCollections = JSON.parse(localStorage.getItem("recipies"));
    if (storedCollections) {
        collections = storedCollections;
    } else {
        collections = {};
    }

    const saved = collections[id];
    if (saved) {
        const savedCount = collections[id] + 1;
        collections[id] = savedCount;
    } else {
        collections[id] = 1
    }

    localStorage.setItem("recipies", JSON.stringify(collections));
}


export { addToLocalStorage }