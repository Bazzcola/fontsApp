import React from 'react';
import { FontBox } from 'ui/atoms/FontBox/FontBox';

import './MyFontsPage.scss';

export const MyFontsPage = () => {

    return (
        <div className="myfonts-content">
            <div className="myfonts-content__left">
                <FontBox text="Merriweather project is led by Sorkin Type" letter="M"/>
            </div>
            <div className="myfonts-content__right">
                <FontBox size="small" color="pink" display="flex" text="Roboto doesn't compromise, allowing letters" letter="R"/>
                <FontBox size="small" color="blue" display="flex" text="Noto Sans covers over 30 scripts" letter="RS"/>
            </div>
        </div>
    )
}