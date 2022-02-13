import React from 'react';
import SvgIcon from './SvgIcon';

function NavBar(props) {

  const switchView = (view) => {
    props.function(view)
  }
  const iconColor = props.color


  return (

      <div className='flex flex-col gap-6 items-center border-inherit'>

        <button className='transition-transform duration-200 ease-in-out hover:translate-x-3' onClick={() => {

          switchView(1)
          console.log(1)
        }}>
          <SvgIcon icon={'Q'} color={iconColor} />
        </button>
        <button className='transition-transform duration-200 ease-in-out hover:translate-x-3' onClick={() => {

          switchView(2)
          console.log(2)
        }}>
          <SvgIcon icon={'U'} color={iconColor} />
        </button>
        <button className='transition-transform duration-200 ease-in-out hover:translate-x-3' onClick={() => {

          switchView(3)
          console.log(3)
        }}>
          <SvgIcon icon={'C'} color={iconColor} />
        </button>
        <button className='transition-transform duration-200 ease-in-out hover:translate-x-3' onClick={() => {

          switchView(4)
          console.log(4)
        }}>
          <SvgIcon icon={'A'} color={iconColor} />
        </button>

      </div>
  )
}

export default NavBar;
