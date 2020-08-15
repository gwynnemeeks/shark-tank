import React from 'react';
import PropTypes from 'prop-types';

import DeadStudents from '../GraveStone/DeadStudents';
import graveShape from '../../helpers/graveShape';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(graveShape.graveShape),
  }

  render() {
    const { deadStudents } = this.props;

    const deadCards = deadStudents.map((student) => (
      <DeadStudents key={student.id} student={student} />
    ));

    return (
            <div>
                <h2>Dearly Departed</h2>
                <div className="card-columns">
                { deadCards }
            </div>
            </div>
    );
  }
}

export default Graveyard;
