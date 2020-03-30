import React, {useState} from 'react';
import './style.scss';
import {Header, Player, History} from 'containers';
import useTheme from 'hooks/useTheme';
import usePlayerIFrame from 'hooks/usePlayerIFrame';
import useHistory from 'hooks/useHistory';

const App: React.FC = () => {
    const {theme, switchTheme} = useTheme();
    const [videoId, setVideoId] = useState<string>('');
    const {history, setHistoryItem, removeHistoryItem} = useHistory();
    usePlayerIFrame();

    const setId = (id: string) => {
        setVideoId(id);
    };

    return (
        <div className="app">
            <Header setId={setId} setHistoryItem={setHistoryItem} />
            <main>
                <button
                    className="app__btn"
                    type="button"
                    onClick={switchTheme}
                >
                    Switch theme
                </button>
                <div className={`app__wrap app__wrap_${theme}`}>
                    <History
                        history={history}
                        removeHistoryItem={removeHistoryItem}
                        setId={setId}
                    />
                    <Player videoId={videoId} />
                </div>
            </main>
        </div>
    );
};

export default App;
