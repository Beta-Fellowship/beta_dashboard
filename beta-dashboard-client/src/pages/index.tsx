import type { NextPage } from 'next'
import { Navbar, Footer, Card, Points, Approx, OutCircle, LittleCircle, Linkdiv } from '../components'
import Link from 'next/link'
import Subtract from '../components/EarnPointCard/Subtract'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <div>
        <Navbar page="Dashboard" />
      </div>
      <Card>
        <Points />
        <Approx />
        <OutCircle />
        <LittleCircle>
          <Linkdiv>
            <Link href="https://www.google.com/">EARN POINTS</Link>
          </Linkdiv>
        </LittleCircle>
        <Subtract>

        </Subtract>
      </Card>
      <Footer />
    </div>

  )
}

export default Home
