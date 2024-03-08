import { useState } from 'react';
import PropTypes from 'prop-types';

const AnswerInput = ({ checkAnswer }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer(inputValue.trim().toLowerCase());
    setInputValue('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Pudes adivinar"
        required
      />
      <button type="submit">Responder</button>
    </form>
  );
};
AnswerInput.propTypes = {
  checkAnswer: PropTypes.func.isRequired,
};
export default AnswerInput;