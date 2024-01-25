import React from 'react';

import Banner from '../Banner/Banner';
function LoseBanner({answer}) {

  return (
    <Banner status="sad">
      {`You lost. The correct answer is ${answer}`}
    </Banner>
  );
}

export default LoseBanner;
