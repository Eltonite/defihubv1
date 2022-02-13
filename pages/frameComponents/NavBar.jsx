import React, { useState } from 'react';
import Example from './Example';
import SvgIcon from './SvgIcon';
import ThemeMenu from './ThemeMenu';

function NavBar(props) {

  let allColors = {
    red: [`bg-red-500`,`bg-red-800`,`border-red-500`,`border-red-800`, `fill-red-800`],
    blue: [`bg-blue-500`,`bg-blue-800`,`border-blue-500`,`border-blue-800`, `fill-blue-800`],
    purple: [`bg-purple-500`,`bg-purple-800`,`border-purple-500`,`border-purple-800`, `fill-purple-800`],
    slate: [`bg-slate-500`,`bg-slate-800`,`border-slate-500`,`border-slate-800`, `fill-slate-800`],
    yellow: [`bg-yellow-500`,`bg-yellow-800`,`border-yellow-500`,`border-yellow-800`, `fill-yellow-800`],
    teal: [`bg-teal-500`,`bg-teal-800`,`border-teal-500`,`border-teal-800`, `fill-teal-800`]
  }

  const switchView = (view) => {
    props.changeDapp(view)
  }

  const [color, setColor] = useState(1)

  const switchTheme = () => {

    if(color === 1){
      props.changeTheme(allColors.red)
      setColor(color + 1)
    }
    else if (color === 2){
      props.changeTheme(allColors.blue)
      setColor(color + 1)
    }
    else if (color === 3){
      props.changeTheme(allColors.purple)
      setColor(color + 1)
    }
    else if (color === 4){
      props.changeTheme(allColors.teal)
      setColor(color + 1)
    }
    else if (color === 5){
      props.changeTheme(allColors.yellow)
      setColor(color + 1)
    }
    else if (color === 6){
      props.changeTheme(allColors.slate)
      setColor(1)
    }
  }

  const iconColor = props.color
  const fillColor = props.fill


  return (

      <div className='flex flex-col gap-6 items-center border-inherit h-full py-2'>

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

        <div className='flex flex-col-reverse h-full'>

          <button onClick={()=>{
            switchTheme(allColors.purple)
          }} className={`h-12 w-12 flex items-center rounded-lg ${iconColor}`}>

            <svg className={`flex-1 ${fillColor}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>

          </button>

        </div>
        

      </div>
  )
}

export default NavBar;
