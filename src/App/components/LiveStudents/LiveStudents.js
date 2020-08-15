import React from 'react';

class LiveStudents extends React.Component {
  render() {
    const { student } = this.props;
    const livingCards = {
      backgroundColor: 'lightcyan',
    };
    const heartBeat = {
      color: 'red',
    };

    return (
            <div className="card">
            <div className="card-body" style={livingCards}>
            <h4 className="card-title">{student.firstName}</h4>
            <p className="card-text"><i className="fas fa-heartbeat fa-2x" style={heartBeat}></i></p>
        </div>
    </div>
    );
  }
}

export default LiveStudents;
