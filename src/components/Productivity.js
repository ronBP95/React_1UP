import React, {useState} from 'react';
import TaskContainer from '../containers/TaskContainer'
import Music from '../components/Music'

const Productivity = () => {
    const [balance, setBalance] = useState(0);

    const addBalance = () => {
        setBalance(balance + 10);
        alert("Congratulations on completing your task! 10 Credits have been added to your balance!")
      }

    const removeBalance = () => {
        setBalance(balance - 30)
        alert("Congratulations on all your hard work today! 30 credits have been removed from your balance. Go enjoy your reward!")
    }

    const jokeBalance = () => {
        alert("You can't actually skip class even if you had the credits lol. Get back to work!")
    }
    

    return (
        <div>
        <h2 className="prodheader"><img src="https://fontmeme.com/permalink/210406/3e2b20ba37da0c3086bfa576311507bb.png" alt="super-mario-font" border="0"></img></h2>
        <h4 className="prodheader">Balance: {balance}</h4>
        <div className="appbody">

            <div className="appcontainer">
                
                <div className="tasks">
                <TaskContainer />
                </div>

                <div className="dailies">
                    <div className='DailyContainer'>
                        <img id="dailytitle" src="https://fontmeme.com/permalink/210406/ce95194a2f02f573eeed0ad2b153b332.png" alt="super-mario-font" border="0"></img>
                            <div className="dailyoptions">
                            <p>Fix Your Bed<button className="appbutton" onClick={addBalance}>+ 10💰</button></p>
                            <p>Brush Your Teeth<button className="appbutton" onClick={addBalance}>+ 10💰</button></p>
                            <p>Take Out The Trash<button className="appbutton" onClick={addBalance}>+ 10💰</button></p>
                            </div>
                    </div>
                </div>

                <div className="rewards">
                    <div className='RewardContainer'>
                    <img id="rewardtitle" src="https://fontmeme.com/permalink/210406/6a97853869af7cfb13e9c9f95bb5481c.png" alt="super-mario-font" border="0"></img>
                        <div className="rewardoptions">
                        <p>Watch TV (30 Minutes)<button className="appbutton" onClick={removeBalance}>- 30💰</button></p>
                        <p>Play a Game (30 Minutes)<button className="appbutton" onClick={removeBalance}>- 30💰</button></p>
                        <p>Skip Class<button className="appbutton" onClick={jokeBalance}>- 300💰</button></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mariocontainer">
                <div className="innermario">
                <h2>Super Mario Theme</h2>
                <Music id="playbutton" url="https://www.youtube.com/watch?v=NTa6Xbzfq1U"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Productivity;
