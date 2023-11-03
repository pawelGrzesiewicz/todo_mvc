import {useEffect, useState} from "react";

const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    }
    return [];
};


function useLocalStorage(key) {
    const [data, setData] = useState(getFromLocalStorage(key));

    useEffect(() => {
        updateLocalStorage(key, data);
    }, [key, data]);

    return [data, setData];
}

export default useLocalStorage;