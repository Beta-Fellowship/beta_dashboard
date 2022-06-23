import type { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { Navbar, Footer, CouponCardCombo, EarnPoint } from '../../components'
import { fetchDiscordInfo } from '../../utils/api'

const Dashboard: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <div>
        <Navbar page="Dashboard" />
      </div>

      <div>
        <EarnPoint />
      </div>

      <div className='flex flex-row space-x-5'>
        <div>
          <CouponCardCombo />
        </div>

        <div>
          <CouponCardCombo />
        </div>
      </div>

      <Footer />
    </div>
  )
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return fetchDiscordInfo(context)
// }

export default Dashboard