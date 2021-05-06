import React from 'react';
import { BuyFontsPage } from '../BuyFontsPage/BuyFontsPage';
import { MyFontsPage } from '../MyFontsPage/MyFontsPage';

import './MainPage.scss';

export const MainPage = () => {
    const [myFont, setMyFont] = React.useState<boolean>(false);
    const [buyFont, setBuyFont] = React.useState<boolean>(false);

    const onShowMyFonts = () => {
        setMyFont(true);
        setBuyFont(false);
    }

    const onShowBuyFonts = () => {
        setBuyFont(true);
        setMyFont(false);
    }

    return (
        <div className="main-container">
            <div className="main-container__navigation">
                <div className="description"><span>Please select one font</span></div>
                <div className="links">
                    <span onClick={onShowMyFonts}>MY FONTS</span>
                    <span onClick={onShowBuyFonts}>BUY FONTS</span>
                </div>
            </div>
            <div className="main-container__content">
                {myFont && <MyFontsPage />}
                {buyFont && <BuyFontsPage />}
            </div>
        </div>
    )
}