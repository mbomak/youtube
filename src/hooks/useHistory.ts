import {useState} from 'react';

export interface iItem {
    id: string;
    title: string;
}

const useHistory = () => {
    const [state, setState] = useState(() => {
        const item = localStorage.getItem('history');
        return item ? JSON.parse(item) : [];
    });

    const setHistoryItem = (item: iItem) => {
        if (state.length && state.filter((el: iItem) => el.id === item.id).length > 0) {
            return;
        }
        localStorage.setItem('history', JSON.stringify(state.concat([item])));
        setState(state.concat([item]));
    };

    const removeHistoryItem = (id: string) => {
        const newItems = state.filter((item: iItem) => item.id !== id);

        localStorage.setItem('history', JSON.stringify(newItems));
        setState(newItems);
    };

    return {
        history: state,
        setHistoryItem,
        removeHistoryItem,
    };
};

export default useHistory;
