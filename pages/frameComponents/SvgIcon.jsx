import React from 'react';
import logo from './SVGs/aave.png'

function SvgIcon(props) {
  return (
      <div className='h-10 w-10 border-2 rounded-lg border-black flex text-center items-center'>
        <div className='flex-1'>
        {props.icon}
        </div>
      </div>    
  )
}

export default SvgIcon;
