import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const ToggleButton = styled.button`
    --toggle-width: 60px;
    --toggle-height: 20px;
    --toggle-padding: 2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: var(--text-2xl);
    line-height: 1;
    width: var(--toggle-width);
    height: var(--toggle-height);
    padding: var(--toggle-padding);
    border: 0;
    border-radius: calc(var(--toggle-width) / 2);
    cursor: pointer;
    background: var(--text-color);
    &:focus {
        outline-offset: 5px;
    }
    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const ToggleThumb = styled.span`
    position: absolute;
    left: calc(var(--toggle-padding) + 3px);
    width: calc(var(--toggle-height) - (var(--toggle-padding) * 3));
    height: calc(var(--toggle-height) - (var(--toggle-padding) * 3));
    border-radius: 50%;
    background: var(--bg-color);
    transition: transform 0.65s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: ${(p) => 
        p.activeTheme === "dark"
            ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
            : "none"};
`;

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    return (
        <ToggleButton
            aria-label={`Change to ${inactiveTheme} mode`}
            title={`Change to ${inactiveTheme} mode`}
            type='button'
            onClick={() => setActiveTheme(inactiveTheme)}
        >
            <ToggleThumb activeTheme={activeTheme} />
        </ToggleButton>
    );
};

export default ThemeToggle
