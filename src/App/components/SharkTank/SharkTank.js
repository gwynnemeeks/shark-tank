import React from 'react';
import PropTypes from 'prop-types';

import LivingStudents from '../LiveStudents/LiveStudents';
import tankShape from '../../helpers/tankShape';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(tankShape.tankShape),
    sharkAttack: PropTypes.func,
  }

  render() {
    const { livingStudents, sharkAttack } = this.props;

    const livingCards = livingStudents.map((student) => (
      <LivingStudents key={student.id} student={student} sharkAttack={sharkAttack} />
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
