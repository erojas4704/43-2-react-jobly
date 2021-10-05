import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);

    //IDK grab the value on mount and if it doesn't exist use the initial i guess dude
    useEffect(() => {
        const localValue = JSON.parse(window.localStorage.getItem(key));
        if (localValue) {
            setValue(localValue);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage;