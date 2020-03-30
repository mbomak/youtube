import React from 'react';
import './style.scss';
import {iItem} from 'hooks/useHistory';

interface iProps {
    history: iItem[];
    removeHistoryItem(id: string): void;
    setId(id: string): void;
}

const History: React.FC<iProps> = ({history, removeHistoryItem, setId}) => {
    return (
        <div className="history">
            &nbsp;Watch history
            <div className="history__wrap">
                {history &&
                    !!history.length &&
                    history.map((el: iItem) => (
                        <div className="history__item" key={el.id}>
                            <button
                                type="button"
                                className="history__title"
                                onClick={() => setId(el.id)}
                            >
                                {el.title}
                            </button>
                            <button
                                className="history__btn"
                                type="button"
                                onClick={() => removeHistoryItem(el.id)}
                            >
                                delete
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default History;
