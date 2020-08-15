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
    console.warn('starting shark attack');
    studentData.sharkAttack();
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (
    <div className="App">
      <h1>Shark Tank</h1>
      <button className="btn btn-danger" onClick={this.sharkAttackEvent}><i className="fas fa-fish">Shark Attack!</i></button>
      <SharkTank livingStudents={livingStudents} sharkAttack={this.sharkAttackEvent} />
      <Graveyard deadStudents={deadStudents} />
    </div>
    );
  }
}

export default App;
