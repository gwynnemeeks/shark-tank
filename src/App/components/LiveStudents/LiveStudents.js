import React from 'react';

class LiveStudents extends React.Component {
  render() {
    const { student } = this.props;
    return (
            <div className="card">
            <div className="card-body livingCard">
            <h5 className="card-title">{student.firstName}</h5>
            <p className="card-text"><i className="fas fa-heartbeat"></i></p>
        </div>
    </div>
    );
  }
}

export default LiveStudents;
