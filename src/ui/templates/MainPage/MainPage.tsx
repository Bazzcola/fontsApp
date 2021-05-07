import React from 'react';
import { BuyFontsPage } from '../../organisms/BuyFontsPage/BuyFontsPage';
import { MyFontsPage } from '../../organisms/MyFontsPage/MyFontsPage';

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
                    <span onClick={onShowMyFonts} className={myFont ? 'active-button' : ''}>MY FONTS</span>
                    <span onClick={onShowBuyFonts} className={buyFont ? 'active-button' : ''}>BUY FONTS</span>
                </div>
            </div>
            <div className="main-container__content">
                {myFont && <MyFontsPage />}
                {buyFont && <BuyFontsPage />}
            </div>
        </div>
    )
}