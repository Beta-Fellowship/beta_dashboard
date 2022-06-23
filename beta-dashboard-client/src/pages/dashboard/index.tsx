import type { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { Navbar, Footer, Card, Points, Approx, OutCircle, LittleCircle, Linkdiv, Subtract, Annotation } from '../../components'
import { fetchDiscordInfo } from '../../utils/api'

const Dashboard: NextPage = () => {
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
          <Annotation/>
        </Subtract>
      </Card>
      <Footer />
    </div>
  )
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return fetchDiscordInfo(context)
// }

export default Dashboard