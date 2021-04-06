import React from 'react';
import TaskContainer from '../containers/TaskContainer'
import DailyContainer from '../containers/DailyContainer'
import RewardContainer from '../containers/RewardContainer';
import Music from '../components/Music'

const Productivity = () => {
    return (
        <div className="appbody">
        <h1 className="apptitle">React 1UP</h1>
            <div className="appcontainer">

                
                <div className="tasks">
                <h2 className="sectionheaders">tasks</h2>
                <TaskContainer />
                </div>

                <div className="dailies">
                <h2 className="sectionheaders">dailies</h2>
                <DailyContainer />
                </div>

                <div className="rewards">
                <h2 className="sectionheaders">rewards</h2>
                <RewardContainer />
                </div>

            </div>
            <div className="mariocontainer">
                <h2>Super Mario Theme</h2>
                <Music url="https://www.youtube.com/watch?v=NTa6Xbzfq1U"/>
            </div>
        </div>
    );
}

export default Productivity;
