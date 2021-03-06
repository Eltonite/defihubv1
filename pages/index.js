import Head from 'next/head'
import { useEffect, useState } from 'react'
import NavBar from './frameComponents/NavBar'
import Quickswap from './defiApps/Quickswap'
import Uniswap from './defiApps/Uniswap'
import Curve from './defiApps/Curve'
import Aave from './defiApps/Aave'
import DefiHome from './defiApps/DefiHome'


export default function Home() {

  const [hub, setHub] = useState(0);

  const changeDapp = (view) => {
    setHub(view)
  }

  //const themePack = [`bg-purple-500`,`bg-purple-800`,`border-purple-500`,`border-purple-800`]

  // const lightBG = `bg-purple-500`
  // const darkBG = `bg-purple-800`
  // const lightBorder = `border-purple-500`
  // const darkBorder = `border-purple-800`

  const defaultTheme = [`bg-zinc-500`,`bg-zinc-800`,`border-zinc-500`,`border-zinc-800`, `fill-zinc-800`]

  const [theme, setTheme] = useState(defaultTheme)

  const lightBG = theme[0]
  const darkBG = theme[1]
  const lightBorder = theme[2]
  const darkBorder = theme[3]
  const darkFill = theme[4]

  const changeTheme = (themeColor) => {
    setTheme(themeColor)
  }

  
  useEffect(()=>{
    setTheme(defaultTheme)
  }, [])

  
  return (
    
    <div className={`flex flex-row-reverse h-screen w-screen ${lightBG}`}>

      <Head>
        <title>DefiHub V1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex flex-grow p-2 w-fit flex-row-reverse ${darkBorder}`}>
        {hub === 0 && <DefiHome color={theme[1]}/> } 
        {hub === 1 && <Quickswap /> } 
        {hub === 2 && <Uniswap /> }
        {hub === 3 && <Curve /> } 
        {hub === 4 && <Aave /> }
      </div>
      
      <div className={`h-screen w-20 p-2 z-10 ${darkBG}`}>
        <NavBar changeDapp={changeDapp} changeTheme={changeTheme} color={lightBG} fill={darkFill}/>
      </div>
      

    </div>
  )
}
