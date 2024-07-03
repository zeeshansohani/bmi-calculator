import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(140);
    const [theme, setTheme] = useState('light');

    const handleHeight = (e) => {
        setHeight(e.target.value);
    };

    const handleWeight = (e) => {
        setWeight(e.target.value);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const output = useMemo(() => {
        const calculateHeight = height / 100;
        return (weight / (calculateHeight * calculateHeight)).toFixed(1);
    }, [weight, height]);

    return (
        <main>
            <h1>BMI CALCULATOR</h1>
            <div className="input-section">
                <p className="slider-output">Weight: {weight}kg</p>
                <input
                    className="input-slider"
                    type="range"
                    step="1"
                    min="40"
                    max="200"
                    onChange={handleWeight}
                />
                <p className="slider-output">Height: {height}cm</p>
                <input
                    className="input-slider"
                    type="range"
                    step="1"
                    min="140"
                    max="220"
                    onChange={handleHeight}
                />
            </div>
            <div className="output-section">
                <p>Your BMI is</p>
                <p className="output">{output}</p>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                Dark Mode
            </button>
        </main>
    );
};

export default App;