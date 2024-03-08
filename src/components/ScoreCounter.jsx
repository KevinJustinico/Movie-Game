import PropTypes from 'prop-types';

const ScoreCounter = ({ score }) => {
  return (
    <div className="score-counter">
      <p>Score: {score}</p>
    </div>
  );
};

ScoreCounter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreCounter;