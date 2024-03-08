import { useState } from 'react';
import Movie from './movieEmoji';
import Answer from './AnswerInput';
import Lives from './LivesCounter';
import Score from './ScoreCounter';
import './styles.css' 

const movies = [
    { name: "Sonic", emoji: "🦔🟦⭕"},
    { name: "Shrek", emoji: "💚👹🐈👸" },
    { name: "Titanic", emoji: "🚢❄️💔" },
    { name: "El hombre araña", emoji: "🕸️🕷️🏙️👦🏽"},
    { name: "Rapidos y furiosos", emoji: "🚗💨👨🏼‍🦲"},
    { name: "Luca", emoji: "👦🏻🌊🔱🛵"},
    { name: "minions", emoji: "💛🍌👖👁️"},
    { name: "Mi pobre angelito", emoji: "🏡🎄👦🏻🪤"},
    { name: "gato con botas", emoji: "😼🥾⚔️⚔️"},
    { name: "Zootopia", emoji: "🦊🐰🚔"},
    { name: "IT", emoji: "🎈😡🤡"},
    { name: "Charly y la fabrica de chocolates", emoji: "🍫👦🏻🏭🎩"},
    { name: "mario", emoji: "🍄👸🏼🐢👨‍🔧"},
    { name: "buscando a nemo", emoji: "🐟🔎🌊"},
    { name: "Walle", emoji: "🤖♻️🌎"},
    { name: "Thor", emoji: "🔨🧔🏼‍♂️⚡"},
    { name: "Aladin", emoji: "🐒🧞‍♂️👦🏾👧🏾"},
    { name: "Elementos", emoji: "🔥💞💧"},
    { name: "Juego de gemelas", emoji: "⛺👧🏻🔄👧🏻"},
    { name: "Jurassic Park", emoji: "🦖🌴🚙" },
    { name: "El rey leon", emoji: "🦁👑🌅" },
    { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
    { name: "Terminator", emoji: "🤖🔫🕶️" },
    { name: "Indiana Jones", emoji: "🤠🔍💎" },
    { name: "Volver al futuro", emoji: "⏰🚗💥" },
    { name: "Clup de pelea", emoji: "👊💼🚽" }
  ];
const Game = () => {

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const currentMovie = movies[currentMovieIndex];

  const checkAnswer = (answer) => {
    if (answer === currentMovie.name.toLowerCase()) {
      setScore(score + 1);
      if(score === 25)
      { 
        alert("GANASTE");
        window.location.reload();
      }
      if (currentMovieIndex + 1 < movies.length) {
        setCurrentMovieIndex(currentMovieIndex + 1);
      } 
      else{
        setGameOver(true);
      }
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
          window.location.reload();
      }
    }
  };
  if (gameOver) {
    return <div 
              className="game-over">Juego Terminado</div>;

  }
  return (
    <div className="game">
      <h1>Adivina la pelicula con emojis. </h1>
      <Movie className="movie-emoji" emoji={currentMovie.emoji} />
      <Answer checkAnswer={checkAnswer} />
      <Lives  className="lives-counter" lives={lives} />
      <Score  className="score-counter" score={score} />
    </div>
  );
};
export default Game;