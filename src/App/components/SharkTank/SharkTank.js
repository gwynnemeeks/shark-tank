import React from 'react';

class SharkTank extends React.Component {
  render() {
    const { students } = this.props;

    return (
            <div>
                <h2>Sharkies</h2>
                { students.map((student) => (<h6>{student.firstName}</h6>)) }
            </div>
    );
  }
}

export default SharkTank;
