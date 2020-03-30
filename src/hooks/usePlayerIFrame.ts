import {useEffect} from 'react';

import config from 'config.json';

const usePlayerIFrame = () => {
    useEffect(() => {
        const tag: HTMLScriptElement = document.createElement('script');
        const firstScriptTag: HTMLScriptElement = document.getElementsByTagName(
            'script'
        )[0];
        const {playerSrc}: {[index: string]: string} = config;

        tag.src = playerSrc;
        firstScriptTag.parentNode &&
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }, []);
};

export default usePlayerIFrame;
