import React from 'react';

class DeadStudents extends React.Component {
  render() {
    const { student } = this.props;
    const deadCards = {
      backgroundColor: 'black',
      color: 'white',
    };
    const skull = {
      color: 'white',
    };

    return (
            <div className="card">
            <div className="card-body" style={deadCards}>
            <h4 className="card-title">{student.firstName}</h4>
            <p className="card-text"><i className="fas fa-skull fa-2x" style={skull}></i></p>
        </div>
    </div>
    );
  }
}

export default DeadStudents;
