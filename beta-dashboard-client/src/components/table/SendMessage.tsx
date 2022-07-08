import message from '../../../public/message.png'
import checkmark from '../../../public/checkmark.png'
import ncheckmark from '../../../public/notcheckmark.png'
import Image from 'next/image';


export default function SendMessage(props: any) {

    const check = false;

    return (
        <div className="absolute flex flex-row cursor-pointer justify-between w-[335px] h-[60px] rounded-xl pr-[24px] top-[100px] md:pr-[32px] md:pl-[20px] md:gap-[96px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg text-white " >
            <div>
                <Image src={message} width={72} height={60} className="absolute" />
            </div>
            <div className='absolute pl-[90px] md:pl-[105px] '> send 50 messages </div>
            <div className="absolute w-[180px] top-[30px] left-[90px] md:left-[120px] bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                <div className="bg-green-600  h-5 rounded-full text-center" style={{ width: `${80}%` }}> 80/100</div>
            </div>

            <div className='absolute top-[20px] left-[300px] md:top-[20px] md:left-[310px]'>
                {check && <Image src={checkmark} width={20} height={20} />}
                {!check && <Image src={ncheckmark} width={20} height={20} />}
            </div>

        </div>
    );
}

{/* <div className="absolute flex flex-row cursor-pointer justify-between items-center gap-[46px] w-[335px] h-[60px] rounded-xl pr-[24px] top-[100px] md:pr-[32px] md:pl-[20px] md:gap-[96px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg" > send 50 messages </div> */ }
