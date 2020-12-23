import React from 'react';
import './App.css';
import './style/Countdown.css';
import CountdownNew from "./components/CountdownNew/CountdownNew";
import moment from "moment";

const birthday = moment('2020-12-26').format();
const inTwoMinutes = moment().add(2, "minute").format();
const inOneMinute = moment().add(1, "minute").format();

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1>Time before the CTO birthday</h1>
        </header>
        <div className="content">
            <CountdownNew date={birthday}/>
            <CountdownNew date={inTwoMinutes}/>
            <CountdownNew date={inOneMinute} timeOutText="Happy birthday boss!"/>
        </div>
    </div>
);

export default App;
