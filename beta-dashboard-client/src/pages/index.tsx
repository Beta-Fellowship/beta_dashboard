import type { NextPage } from 'next'
import { Navbar, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <div>
        <Navbar />
      </div>
      <Footer />
    </div>
  )
}

export default Home
