import React from 'react';
import PropTypes from 'prop-types';

import DeadStudents from '../GraveStone/DeadStudents';
import graveShape from '../../helpers/graveShape';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(graveShape.tankShape),
  }

  render() {
    const { students } = this.props;

    const deadCards = students.map((student) => (
      <DeadStudents key={student.id} student={student} />
    ));

    return (
            <div>
                <div className="card-columns">
                { deadCards }
            </div>
            </div>
    );
  }
}

export default Graveyard;
