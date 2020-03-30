import React from 'react';
import './style.scss';
import {iItem} from 'hooks/useHistory';

interface iProps {
    id: string;
    title: string;
    image: string;
    setId(id: string): void;
    setHistoryItem(item: iItem): void;
}

const Suggestion: React.FC<iProps> = ({
    id,
    title,
    image,
    setId,
    setHistoryItem,
}) => {
    return (
        <div className="suggestion">
            <div className="suggestion__wrap">
                <img
                    className="suggestion__image"
                    src={image}
                    alt="suggestion-image"
                />
                <p className="suggestion__title">{title}</p>
            </div>
            <button
                className="suggestion__btn"
                type="button"
                onClick={() => {
                    setId(id);
                    setHistoryItem({id, title});
                }}
            >
                Play
            </button>
        </div>
    );
};

export default React.memo(Suggestion);
