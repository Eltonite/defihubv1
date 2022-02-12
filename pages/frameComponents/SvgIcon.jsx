import React from 'react';
import Image from 'next/image'
import aave from '/public/aave.png'
import uniswap from '/public/uniswap.png'
import curve from '/public/curve.png'
import quickswap from '/public/quickswap.png'

function SvgIcon(props) {
  return (
      <div className='h-12 w-12 z-10 rounded-lg flex text-center items-center bg-teal-600 '>
        <div className='flex-1'>

          {props.icon === 'Q' && <Image src={quickswap} alt="me" width={32} height={32} />}
          {props.icon === 'U' && <Image src={uniswap} alt="me" width={32} height={32} />}
          {props.icon === 'C' && <Image src={curve} alt="me" width={32} height={32} />}
          {props.icon === 'A' && <Image src={aave} alt="me" width={32} height={32} />}
        </div>

      </div>    
  )
}

export default SvgIcon;
