import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from './frameComponents/SideBar'
import SimpleFrame from './frameComponents/SimpleFrame'

export default function Home() {
  return (
    <div className='flex flex-row bg-slate-400 h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar />
      <SimpleFrame />


    </div>
  )
}
