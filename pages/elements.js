import Head from 'next/head'
import {server} from '../config/index'
import ElementList from '../components/ElementList'
import Nav from '../components/Nav'
import Options from '../components/Options'

export default function elements({elements}) {

  return (
    <div >
      <Nav />
      <Options />
      <Head>
        <title>Elements</title>
      </Head>
      <ElementList elements = {elements}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const elements = await res.json()

  return {
    props: {
      elements
    }
  }

}

/* const elements = () => {
    return (
        <div>
            <Head>
            <title>Elements</title>
            </Head>
            <h1>Verifique los elementos</h1>
        </div>
    )
}

export default elements */


