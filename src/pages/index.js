import Head from "next/head";
import Banner from '../components/Banner'
import PersistentDrawerLeft from '../components/Drawer'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* <Head>
        <title>Sham Dijital Elektronik</title>
      </Head> */}
      <PersistentDrawerLeft />
      <main className='max-w-screen-xl mx-auto'>
        <Banner />  
      </main>
      <Footer />
    </div>
  );
}

       