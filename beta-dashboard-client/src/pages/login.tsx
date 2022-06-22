import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'

import beta_logo from '../../public/beta.png'

const Login: NextPage = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord"
  }

  return (
    <div className='flex items-center justify-center h-screen bg-[#0B0B0B]'>
      <div className='flex flex-col space-y-20'>
        <Image src={beta_logo} alt="Beta Logo" width={100} height={60} className="object-scale-down cursor-pointer" />
        <button className='bg-[#FFD42B] py-2 px-7 space-x-2 flex items-center justify-between rounded-lg' onClick={handleLogin}>
          <FaDiscord size={30} />
          <span>Login with Discord</span>
        </button>
      </div>
    </div>
  )
}

export default Login