import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
 

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="photography mock up" content="next js web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Hero/>
    </div>
  )
}
