import React from 'react';
// import './LiveSudents.scss';

class LiveStudents extends React.Component {
  render() {
    const { student } = this.props;
    return (
            <div className="card">
            <div className="card-body livingCard">
            <h5 className="card-title">{student.firstName} {student.lastName} </h5>
            <p className="card-text">Alive or Dead Functions Go Here</p>
        </div>
    </div>
    );
  }
}

export default LiveStudents;
