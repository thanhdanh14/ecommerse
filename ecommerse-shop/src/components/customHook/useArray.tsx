import { useState } from 'react';

function useArray<T>(defaultValue: T[]) {
    const [array, setArray] = useState<T[]>(defaultValue);

    //   Add new item
    const push = (element: T): void => {
        setArray((prev) => [...prev, element]);
    };

    //   Filter with callback
    const filter = (
        callback: (val: T, index: number, array: T[]) => boolean
    ): void => {
        setArray((prev) => prev.filter(callback));
    };

    // Function updates an element at index position with a new element
    const update = (index: number, newElement: T): void => {
        setArray((prev) => [
            ...prev.slice(0, index),
            newElement,
            ...prev.slice(index + 1, prev.length)
        ]);
    };

    // Function to delete element at index position
    const remove = (index: number): void => {
        setArray((prev) => [
            ...prev.slice(0, index),
            ...prev.slice(index + 1, prev.length)
        ]);
    };

    //   Clear array to empty
    const clear = (): void => {
        setArray([]);
    };

    return { array, set: setArray, push, filter, update, remove, clear };
}

export default useArray;
