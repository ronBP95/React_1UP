import React from 'react';

const DailyContainer = () => {

    return (
        <div className='DailyContainer'>
            <img id="dailytitle" src="https://fontmeme.com/permalink/210406/ce95194a2f02f573eeed0ad2b153b332.png" alt="super-mario-font" border="0"></img>
            <div className="dailyoptions">
            <p>Fix Your Bed<button className="appbutton">+ 10💰</button></p>
            <p>Brush Your Teeth<button className="appbutton">+ 10💰</button></p>
            <p>Take Out The Trash<button className="appbutton">+ 10💰</button></p>
            </div>
        </div>
    );

}

export default DailyContainer;
