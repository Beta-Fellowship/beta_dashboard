import BRP from '../../../public/BRP.png'
import checkmark from '../../../public/checkmark.png'
import ncheckmark from '../../../public/notcheckmark.png'
import Image from 'next/image';

export default function BecomeFellow(props: any) {
    const check = false;

    return (
        <div className="absolute flex flex-row cursor-pointer justify-between top-[300px] w-[335px] h-[60px] rounded-xl pr-[24px] md:pr-[32px] md:pl-[20px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg text-white ">
            <div>
                <Image src={BRP} width={72} height={60} className="absolute" />
            </div>

            <div className='absolute pl-[90px] md:pl-[105px]'>Become a Beta Fellow</div>
            <div className="absolute w-[180px] top-[30px] left-[90px] md:left-[120px] bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                <div className="bg-green-600  h-5 rounded-full text-center" style={{ width: `${30}%` }}> 1/3</div>
            </div>

            <div className='absolute top-[20px] left-[300px] md:top-[20px] md:left-[310px]'>
                { check && <Image src={checkmark} width={20} height={20}/>}
                { !check && <Image src={ncheckmark} width={20} height={20} />}
            </div>

        </div>
    );
}

{/* <div className="absolute flex flex-row cursor-pointer justify-between items-center gap-[46px] w-[335px] h-[60px] top-[200px] rounded-xl pr-[24px] md:pr-[32px] md:pl-[20px] md:gap-[96px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg" >Become a Beta Fellow</div> */ }
