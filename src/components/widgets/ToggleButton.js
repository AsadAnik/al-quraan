import React from 'react';
import StylesModule from '../../style_modules/Widgets.module.css';

const ToggleButton = ({click}) => {
    return (
        <div className={StylesModule.display}>
            <label className={StylesModule.toggle}>
                <input 
                    type="checkbox" 
                    className={StylesModule.toggle_input} 
                    onClick={() => click()}
                />
                <div className={StylesModule.toggle_control} />
            </label>
        </div>
    )
}

export default ToggleButton;