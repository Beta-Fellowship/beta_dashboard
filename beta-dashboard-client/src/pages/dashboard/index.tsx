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

    <div className='absolute w-[213px] h-[21px] top-[994px] left-[20px] md:w-[273px] md:h-[27px] md:top-[462px] md:left-[467px] font-[Poppins] not-italic font-normal text-sm leading-[22px] tracking-wide text-white'>
      WHAT YOU CAN REDEEM NOW
    </div>
      <div className=" absolute flex flex-row w-[300px] h-[169px] bg-[#0b0b0b] left-[20px] top-[1031px] md:top-[526px] md:left-[464px] overflow-x-auto">
          <CouponCardCombo />
          <CouponCardCombo />
      </div>

      <Footer />
    </div>
  )
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return fetchDiscordInfo(context)
// }

export default Dashboard