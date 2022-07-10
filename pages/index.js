import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
import Instagram from '../components/Instagram';
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData';
 
 

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="photography mock up" content="next js web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

       <Hero heading="Captur Photography" message="I enjoy every shot and every shot i take can express itself."/>
       <Slider slides={SliderData}/>
       <Instagram/>
    </div>
  )
}
