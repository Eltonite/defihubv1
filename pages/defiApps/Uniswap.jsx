import React from 'react';

function Uniswap() {
  return (
    <div className='flex flex-grow p-2 w-fit flex-row-reverse border-hidden border-inherit'>
      <iframe className='flex-grow rounded-lg border-8 border-inherit' src="https://app.uniswap.org/#/swap?chain=polygon" frameBorder="0"></iframe>
    </div>
  )
}

export default Uniswap;
