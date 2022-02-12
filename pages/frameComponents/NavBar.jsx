import React from 'react';
import SvgIcon from './SvgIcon';

function NavBar(props) {

  const switchView = (view) => {
    props.function(view)
  }


  return (
    <div className='h-screen w-20 bg-teal-500 p-2 pr-0 z-10'>

      <div className='w-full h-full bg-teal-800 rounded-lg flex flex-col p-2 gap-6 items-center'>

        <button className='transition-transform duration-200 ease-in-out hover:translate-x-4' onClick={() => {

          switchView(1)
          console.log(1)
        }}>
          <SvgIcon icon={'Q'} />
        </button>
        <button className='transition-transform duration-200 ease-in-out hover:translate-x-4' onClick={() => {

          switchView(2)
          console.log(2)
        }}>
          <SvgIcon icon={'U'} />
        </button>
        <button className='transition-transform duration-200 ease-in-out hover:translate-x-4' onClick={() => {

          switchView(3)
          console.log(3)
        }}>
          <SvgIcon icon={'C'} />
        </button>
        <button className='transition-transform duration-200 ease-in-out hover:translate-x-4' onClick={() => {

          switchView(4)
          console.log(4)
        }}>
          <SvgIcon icon={'A'} />
        </button>

      </div>

    </div>
  )
}

export default NavBar;
