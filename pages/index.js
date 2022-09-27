import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from './App'
export default function Home() {
  return (
    <div className="headContainer">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
    <App />
    </div>
  )
}
