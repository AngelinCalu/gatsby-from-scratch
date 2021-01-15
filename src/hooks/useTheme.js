import { useState } from 'react';

const getStoredTheme = () => {
    if (typeof window === 'undefined') return 'light';

    const storedTheme = window.localStorage.getItem('theme');
    if (!storedTheme) return 'light';

    return JSON.parse(storedTheme);
};

const useColors = () => {
    const [theme, setTheme] = useState(getStoredTheme());

    const toggleTheme = () => {
        const updatedTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(updatedTheme);
        if (updatedTheme === 'light') {
            document.querySelector('html').classList.remove('dark');
        } else {
            document.querySelector('html').classList.add('dark');
        }
        if (typeof window !== 'undefined') localStorage.setItem('theme', JSON.stringify(updatedTheme));
    };
    return {
        theme,
        toggleTheme,
    };
};

export default useColors;