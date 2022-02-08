import React from 'react';

function SimpleFrame() {
  return (
    <div className='p-2 m-4 rounded-xl bg-gray-600 flex flex-row-reverse flex-grow'>
      <iframe className='rounded-2xl p-2 flex-grow' src="https://quickswap.exchange/#/swap" frameborder="0"></iframe>
    </div>
  )
}

export default SimpleFrame;
