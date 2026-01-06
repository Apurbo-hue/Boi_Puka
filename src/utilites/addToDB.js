const getStoredBook = () => {
    const storedBooks = localStorage.getItem("readList")
    if (storedBooks) {
        const convertedStoredBooks = JSON.parse(storedBooks)
        return convertedStoredBooks;
    }

    else {
        return [];
    }

}

const addToStoredDB = (id) => {

    const Data = getStoredBook();
    if (Data.includes(id)) {
        alert('This id already exist');
    }
    else {
        Data.push(id)
        const setData = JSON.stringify(Data)
        localStorage.setItem("readList", setData)
    }

}

const removeID = (id) => {
    const Data = getStoredBook();
    const removedData = Data.filter(data => data != id)
    const removedDataConverted = JSON.stringify(removedData)
    localStorage.setItem("readList", removedDataConverted)
}

export { addToStoredDB, removeID, getStoredBook }