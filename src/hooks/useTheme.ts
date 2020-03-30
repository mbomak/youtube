import {useState} from 'react';

const themeArr: string[] = ['first', 'second'];

const useTheme = () => {
    const [theme, setTheme] = useState(themeArr[0]);
    const switchTheme = () => {
        const index: number = themeArr.indexOf(theme);

        if (index === -1) {
            console.error('Error in hook!');
        } else if (index === themeArr.length - 1) {
            setTheme(themeArr[0]);
        } else {
            setTheme(themeArr[index + 1]);
        }
    };

    return {theme, switchTheme};
};

export default useTheme;
