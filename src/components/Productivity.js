import React from 'react';
import TaskContainer from '../containers/TaskContainer'
import DailyContainer from '../containers/DailyContainer'
import RewardContainer from '../containers/RewardContainer';
import Music from '../components/Music'

const Productivity = () => {
    return (
        <div>
        <h2 className="prodheader"><img src="https://fontmeme.com/permalink/210406/3e2b20ba37da0c3086bfa576311507bb.png" alt="super-mario-font" border="0"></img></h2>
        <h4 className="prodheader">Balance: 0</h4>
        <div className="appbody">

            <div className="appcontainer">
                
                <div className="tasks">
                <TaskContainer />
                </div>

                <div className="dailies">
                <DailyContainer />
                </div>

                <div className="rewards">
                <RewardContainer />
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
