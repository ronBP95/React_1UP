import React from 'react';

const RewardContainer = () => {

    return (
        <div className='RewardContainer'>
            <img id="rewardtitle" src="https://fontmeme.com/permalink/210406/6a97853869af7cfb13e9c9f95bb5481c.png" alt="super-mario-font" border="0"></img>
            <div className="rewardoptions">
            <p>Reward 1<button className="appbutton">- 10</button></p>
            <p>Reward 2<button className="appbutton">- 10</button></p>
            <p>Reward 3<button className="appbutton">- 10</button></p>
            </div>
        </div>
    );

}

export default RewardContainer;
