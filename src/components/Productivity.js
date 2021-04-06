import React from 'react';
import TaskContainer from '../containers/TaskContainer'
import DailyContainer from '../containers/DailyContainer'
import RewardContainer from '../containers/RewardContainer';
import Music from '../components/Music'

const Productivity = () => {
    return (
        <div>
        <h2 className="prodheader">Productivity</h2>
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
                <h2>Super Mario Theme</h2>
                <Music url="https://www.youtube.com/watch?v=NTa6Xbzfq1U"/>
            </div>
        </div>
        </div>
    );
}

export default Productivity;
