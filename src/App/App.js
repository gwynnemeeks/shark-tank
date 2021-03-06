import React from 'react';

import SharkTank from './components/SharkTank/SharkTank';
import Graveyard from './components/Graveyard/Graveyard';

import studentData from './helpers/studentData';

import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  sharkAttackEvent = (e) => {
    e.preventDefault();
    studentData.sharkAttack();
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    const { livingStudents, deadStudents } = this.state;
    const button = {
      margin: '10px',
    };
    const textColor = {
      color: 'lightgray',
    };

    return (
    <div className="App">
      <h1 style={textColor}>Shark Tank</h1>
      <h4 style={textColor}>Dive On In!</h4>
      <button className="btn btn-danger" style={button} onClick={this.sharkAttackEvent}><i className="fas fa-swimmer fa-2x"></i></button>
      <SharkTank livingStudents={livingStudents} sharkAttack={this.sharkAttackEvent} />
      <Graveyard deadStudents={deadStudents} />
    </div>
    );
  }
}

export default App;
