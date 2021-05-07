import React from 'react';

import './FontBox.scss';

interface Configuration {
    size?:string;
    color?:string;
    text?:string;
    display?:string;
    letter?:string;
}

export const FontBox:React.FC<Configuration> = ({size, color, text, display, letter}) => {
    const [active, setActive] = React.useState<boolean>(false);
    const onActive = () => {
        setActive(prevState => !prevState);
    }

    return (
        <div className={`font-box-container ${display === 'flex' ? 'display-inline' : ''} ${active ? 'opacity' : ''}`}>  
                <div className={`font-box ${size === 'small' ? 'small' : ''}`} onClick={onActive}>
                    <div className={`content ${size === 'small' ? 'small-font' : ''} ${color || ''}`}>
                        <p>{letter}</p>
                    </div>
                </div>
                <div className="description">
                    <span>{text}</span>
                </div>
        </div>
    )
}