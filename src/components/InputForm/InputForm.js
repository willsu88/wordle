import React from 'react';

function InputForm({addItemToList, gameStatus}) {

  const [tempGuess, setTempGuess] = React.useState('');

  return (
    <div> 
      <form className="guess-input-wrapper" 
        onSubmit={event => {
          event.preventDefault();
          addItemToList(tempGuess);
          setTempGuess('');
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" 
              maxLength={5}
              pattern="[a-zA-Z]{5}" required title="5 letter word"
              value={tempGuess}
              disabled={gameStatus!=="playing"}
              onChange={event => {
                setTempGuess(event.target.value.toUpperCase());}}
        />

      </form>
    </div>
  );
}

export default InputForm;
