import Head from 'next/head';
import Login from '../components/Login'

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Easy Condo Manager</title>
        <meta name= 'keywords' content = 'condo, programming'/>
      </Head>
      <Login />
      
    </div>
  )
}



