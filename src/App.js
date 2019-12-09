//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [visitingScore, setVisitingScore] = useState(0);
  const [quarterNumber, setQuarter] = useState(1);
  const [mins, setMin] = useState(15);
  const [secs, setSec] = useState(0);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
 
  if(quarterNumber > 4)
  {
    setQuarter(1);
  }

  if(down > 4)
  {
    setDown(1);
  }

  if(toGo <= 0)
  {
    setToGo(10);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{mins}:{secs}0</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{visitingScore}</div>
          </div>
        </div>
        <BottomRow quarter = {quarterNumber} down = {down} toGo = {toGo}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setVisitingScore(visitingScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setVisitingScore(visitingScore + 3)}>Away Field Goal</button>
        </div>
        <div className="awayButtons__fieldGoal">
        <button onClick={() => setQuarter(quarterNumber + 1)}>Quarter</button>
        </div>
        <div className="awayButtons__fieldGoal">
          <button onClick={() => setQuarter(1) + setHomeScore(0) + setVisitingScore(0) + setMin(15) + setSec(0) + setDown(1)+ setToGo(10)}> Reset Game</button>
        </div>
        <div className="awayButtons__fieldGoal">
          <button onClick={() => setDown(down + 1 )}> Set Down</button>
        </div>
        <div className="awayButtons__fieldGoal">
          <button onClick={() => setToGo(toGo - 1 )}> To Go</button>
        </div>
      </section>
    </div>
  );
}

export default App;
