import React, { useState } from "react";

import "./ToggleSwitch.css";

import { Theme, useThemeContext } from "../../Context/themeModeContext";

const ToggleSwitch = () => {
    const { theme, onChangeTheme = () => {} } = useThemeContext();

    const onClickTheme = () => {
        onChangeTheme(theme === "light" ? Theme.Dark : Theme.Light);
    };

    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);


    return (
        <label className="toggleSwitch">
            <input onClick={() => onClickTheme()} 
            type="checkbox" 
            checked={isToggled} 
            onChange={onToggle} />
            <span className="switch"></span>
        </label>
    );
};

export default ToggleSwitch;

