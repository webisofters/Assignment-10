import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Hero.jsx'
import Navbar from "../Components/Navbar.jsx"
import SectionI from '../Components/SectionI.jsx'
import SectionII from '../Components/SectionII.jsx'
import SectionIII from '../Components/SectionIII.jsx'
import SectionIV from '../Components/SectionIV.jsx'
import SectionV from '../Components/SectionV.jsx'
import SectionVI from '../Components/SectionVI.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <SectionI/>
      <SectionII/>
      <SectionIII/>
      <SectionIV/>
      <SectionV/>
      <SectionVI/>
    </div>
  )
}
