import React from 'react';

function Uniswap() {
  return (
    <div className=' bg-teal-500 flex flex-grow p-2 w-fit flex-row-reverse'>
      <iframe className='flex-grow rounded-lg border-8 border-teal-800' src="https://app.uniswap.org/#/swap?chain=polygon" frameborder="0"></iframe>
    </div>
  )
}

export default Uniswap;
