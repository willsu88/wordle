import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputForm from '../InputForm'
import InputList from '../InputList';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleGuessList(tempGuess) {
    const nextGuess = {
      id: Math.random(),
      value: tempGuess
    }
    const nextGuessList = [...guessList, nextGuess];
    setGuessList(nextGuessList);

    if (tempGuess === answer) {
      setGameStatus("win");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose")
    }
  }

  return (
    <div>
      <InputList answer={answer} guessList={guessList}/>
      <InputForm addItemToList={handleGuessList} gameStatus={gameStatus}/>

      {gameStatus === 'win' && (
        <WinBanner numOfGuesses={guessList.length} />)}

      {gameStatus === 'lose' && <LoseBanner answer={answer}/>}
    </div>
    );
}
export default Game;
