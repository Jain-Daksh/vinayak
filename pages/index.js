import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import HomePage from '../components/HomePage'
import Whyus from '../components/Whyus'
import NewArrivals from '../components/NewArrivals'
import Info from '../components/Info'
import Product from '../components/Product'
import Contactus from '../components/Contactus'
import Images from '../components/images'
import FooterWebsite from '../components/Footer-website'
import Footer from '../components/Footer'
export default function Home() {
  return (
  <div>
    <Head>
      <title></title>
    </Head>
    <Navbar />
    <HomePage />
    <AboutUs />
    <Product />
    <Whyus />
    <NewArrivals />
    <Info />
    <Images />
    <Contactus />
    <FooterWebsite />
    <Footer />
  </div>
  )
}
