import React from 'react';
import PropTypes from 'prop-types';

import LivingStudents from '../LiveStudents/LiveStudents';
import tankShape from '../../helpers/tankShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(tankShape.tankShape),
  }

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
