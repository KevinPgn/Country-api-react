import { useState } from 'react';

/*
create a custom hook list who can :

[0]		The current list of elements.
[1].set	l: array	Replaces the entire list with a new array l.
[1].push	element: any	Appends the element to the end of the list.
[1].removeAt	index: number	Removes the element at the specified index from the list.
[1].insertAt	index: number, element: any	Inserts the element at the specified index in the list.
[1].updateAt	index: number, element: any	Replaces the element at the specified index with the element.
[1].clear		Removes all elements from the list.
*/

export const useList = (initialList = []) => {
    const [list, setList] = useState(initialList);

    const push = (element) => {
        setList([...list, element]);
    }

    const removeAt = (index) => {
        setList(list.filter((_, i) => i !== index));
    }

    const insertAt = (index, element) => {
        setList([
            ...list.slice(0, index),
            element,
            ...list.slice(index)
        ]);
    }

    const updateAt = (index, element) => {
        setList([
            ...list.slice(0, index),
            element,
            ...list.slice(index + 1)
        ]);
    }

    const clear = () => {
        setList([]);
    }

    return [list, { push, removeAt, insertAt, updateAt, clear }];
}