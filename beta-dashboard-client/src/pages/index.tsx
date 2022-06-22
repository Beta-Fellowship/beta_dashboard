import type { NextPage } from 'next'
import { Navbar, Footer } from '../components'
import Card from '../components/EarnPointCard/Card'
import Point from '../components/EarnPointCard/Points'
import Approx from '../components/EarnPointCard/Approx'
import OutCircle from '../components/EarnPointCard/OutCircle'
import LittleCircle from '../components/EarnPointCard/LittleCircle'
import Linkdiv from '../components/EarnPointCard/Linkdiv'
import Link from 'next/link'
import Subtract from '../components/EarnPointCard/Subtract'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <div>
        <Navbar />
      </div>
      <Card>
        <Point />
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
