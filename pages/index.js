import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Toolbar from '../components/Toolbar'

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar/>
      <div className={styles.main}>
         <h1>Next.jS News App </h1>

         <h3>Another online option for English learning is FluentU. FluentU is designed to get you comfortable </h3>
      </div>
    
    </div>
  )
}
