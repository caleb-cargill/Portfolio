import React from 'react';
import '../styles/style.css';

export const SetDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

export const SetLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

export const GetTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = 
        window.matchMedia
        && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
        storedTheme === "dark"
        || (storedTheme === null && prefersDark);

    return defaultDark;
};

export const SetTheme = () => {
    const defaultDark = GetTheme();
    if (defaultDark) {
        SetDark();
    }
};

export const ThemeProvider = () => {
    const toggleTheme = () => {
        const currentDark = GetTheme();
        if (currentDark) {
            SetLight();
        } else {
            SetDark();
        }
    };

    const defaultDark = GetTheme();
    SetTheme();

    return (
        <div>
            <label className="toggle">
                <input type="checkbox" className="toggle-input" defaultChecked={defaultDark} onClick={toggleTheme}/>
                <span className="toggle-slider"></span>
            </label>
        </div>
    );
};