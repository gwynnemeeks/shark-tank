import React from 'react';

class DeadStudents extends React.Component {
  render() {
    const { student } = this.props;
    return (
            <div className="card">
            <div className="card-body livingCard">
            <h5 className="card-title">{student.firstName} {student.lastName} </h5>
            <p className="card-text">Dead</p>
        </div>
    </div>
    );
  }
}

export default DeadStudents;
