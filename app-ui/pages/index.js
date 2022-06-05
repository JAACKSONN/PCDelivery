import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PC-Delivery</title>
        <meta name="description" content="Build your dream PC and get it delivered now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList/>
    </div>
  )
}
