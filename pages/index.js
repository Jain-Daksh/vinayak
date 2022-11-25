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
import Slider from '../components/Slider'
import seoDetails from './Schema.json'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Vinayak Steel Furniture</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(seoDetails) }}
				/>
      </Head>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Product />
      <Whyus />
      <NewArrivals />
      <Info />
      <Slider />
      <Contactus />
      <FooterWebsite />
      <Footer />
    </div>
  )
}
