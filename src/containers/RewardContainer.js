import React from 'react';

const RewardContainer = () => {

    return (
        <div className='RewardContainer'>
            <img id="rewardtitle" src="https://fontmeme.com/permalink/210406/6a97853869af7cfb13e9c9f95bb5481c.png" alt="super-mario-font" border="0"></img>
            <div className="rewardoptions">
            <p>Watch TV (30 Minutes)<button className="appbutton">- 30💰</button></p>
            <p>Play a Game (30 Minutes)<button className="appbutton">- 30💰</button></p>
            <p>Skip Class<button className="appbutton">- 300💰</button></p>
            </div>
        </div>
    );

}

export default RewardContainer;
