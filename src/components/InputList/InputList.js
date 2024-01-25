import React from 'react';
import {range} from '../../utils';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function InputList({guessList, answer}) {

  return (
    <div className="guess-results">

    

      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess key={num} answer={answer} word={num < guessList.length ? guessList[num].value : ""}/>
      ))}



    </div>
  );
}

export default InputList;
