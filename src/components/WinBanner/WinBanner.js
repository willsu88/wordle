import React from 'react';
import Banner from '../Banner/Banner';
function WinBanner({numOfGuesses}) {

  return (
    <Banner status="happy"> 
      <p>
      <strong>
        {`Congratulations, you won in ${numOfGuesses} guesses`}
      </strong>
      </p>

    </Banner>
  );
}

export default WinBanner;
