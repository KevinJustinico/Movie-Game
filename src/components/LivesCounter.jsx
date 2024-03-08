
import PropTypes from 'prop-types';
const LivesCounter = ({ lives }) => {
  return (
    <div className="lives-counter">
      <p>Lives: {lives}</p>
    </div>
  );
};
LivesCounter.propTypes = {
  lives: PropTypes.number.isRequired,
};
export default LivesCounter;