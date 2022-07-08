import littleman from '../../../public/littleman.png'
import checkmark from '../../../public/checkmark.png'
import ncheckmark from '../../../public/notcheckmark.png'
import Image from 'next/image';

export default function InviteFriend(props: any) {
    const check = true;

    return (
        <div className="absolute flex flex-row cursor-pointer justify-between items-center w-[335px] h-[60px] rounded-xl pr-[24px] md:pr-[32px] md:pl-[20px] md:gap-[96px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg border-solid border-black " >
            <div>
                <Image src={littleman} width={72} height={60} className="absolute" />
            </div>

            <div className='absolute pl-[90px] text-white md:pl-[120px]'> Invite a friend </div>
            
            <div className='absolute top-[20px] left-[300px] md:top-[40px] md:left-[310px]'>
                { check && <Image src={checkmark} width={20} height={20} className="absolute" />}
                { !check && <Image src={ncheckmark} width={20} height={20} className="absolute" />}
            </div>
        </div>
    );
}

{/* <div className="absolute flex flex-row cursor-pointer justify-between items-center gap-[46px] w-[335px] h-[60px] rounded-xl pr-[24px] md:pr-[32px] md:pl-[20px] md:gap-[96px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg" >Invite a friend </div> */ }
