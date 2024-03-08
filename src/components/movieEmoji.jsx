import PropTypes from 'prop-types';

const MovieEmoji = ({ emoji }) => {
  return <div className="movie-emoji">{emoji}</div>;
};
MovieEmoji.propTypes = {
  emoji: PropTypes.string.isRequired,
};
export default MovieEmoji;