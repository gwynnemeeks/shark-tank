import PropTypes from 'prop-types';

const tankShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isDead: PropTypes.bool.isRequired,
});

export default { tankShape };
