import React from 'react';

import SharkTank from './components/SharkTank/SharkTank';

import studentData from './helpers/studentData';

import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
  }

  render() {
    const { students } = this.state;

    return (
    <div className="App">
      <h1>Shark Tank</h1>
      <button className="btn btn-danger"><i className="fas fa-fish"></i></button>
      <SharkTank students={students} />
    </div>
    );
  }
}

export default App;
