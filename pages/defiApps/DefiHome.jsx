import React from 'react'

function DefiHome(props) {

  const textColor = props.color
  

  return (
    <div className='flex flex-grow p-2 w-fit flex-row-reverse border-hidden border-inherit'>
      <div className={`flex flex-col justify-center flex-grow rounded-lg border-8 border-inherit font-dosis ${textColor}`}>
        <div className='sm:text-m lg:text-xl text-white animate-pulse'>
          <div>
            {'<--- '}
          </div>
          <div>
          {"Choose your favorite"}
          </div>
          <div>
            {'Dapp to get started'}
          </div>
        </div>
        <div className='text-center sm:text-4xl lg:text-8xl text-white'>
          <h1 className=''>WELCOME</h1>
          <h1 className=''>TO</h1>
          <h1 className=''>Defi Hub V1</h1>
          
        </div>
      </div>
    </div>
  )
}

export default DefiHome