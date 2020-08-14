import React from 'react';
import LivingStudents from '../LiveStudents/LiveStudents';

class SharkTank extends React.Component {
  render() {
    const { students } = this.props;

    const livingCards = students.map((student) => (
      <LivingStudents key={student.id} student={student} />
    ));

    return (
            <div>
                <div className="card-columns">
                { livingCards }
            </div>
            </div>
    );
  }
}

export default SharkTank;
