import React, {FormEvent, useState} from 'react';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash.debounce';
import getList from 'helpers/getList';
import {Suggestion} from 'components';
import './style.scss';
import {iItem} from "hooks/useHistory";

interface iObj {
    [index: string]: any;
}

interface iProps {
    setId(id: string): void;
    setHistoryItem(item: iItem): void
}

const Header: React.FC<iProps> = ({setId, setHistoryItem}) => {
    const [suggestions, setSuggestions] = useState<[]>([]);
    const [text, setText] = useState<string>('');

    const onSuggestionsFetchRequested = debounce(async () => {
        try {
            const {items} = await getList(text);
            const list = items.map(
                ({id, snippet}: {id: iObj; snippet: iObj}) => ({
                    id: id.videoId,
                    title: snippet.title,
                    image: snippet.thumbnails.default.url,
                })
            );

            setSuggestions(list);
        } catch (err) {
            console.error(err);
        }
    }, 850);

    const onSuggestionsClearRequested = () => setSuggestions([]);

    const getSuggestionValue = (suggestion: any) => suggestion.title;

    return (
        <header className="header">
            <div className="header__wrap">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={(suggestion: any) => (
                        <Suggestion setId={setId} setHistoryItem={setHistoryItem} {...suggestion} />
                    )}
                    inputProps={{
                        placeholder: 'Enter text',
                        value: text,
                        type: 'search',
                        onChange: (
                            e: FormEvent,
                            {newValue}: {newValue: string}
                        ) => setText(newValue)
                    }}
                />
            </div>
        </header>
    );
};

export default Header;
