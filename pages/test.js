//import Layout from '../components/MyLayout.js'
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'

const Test = (props) => (
    <h1>Batman TV Shows</h1>

)

Test.getInitialProps = 
  
  async function() {
    // fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const data = await res.json()
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    data: data
  }
}

export default Test