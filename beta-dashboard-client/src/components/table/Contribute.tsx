import pen from '../../../public/pen.png'
import Image from 'next/image';
import checkmark from '../../../public/checkmark.png'
import ncheckmark from '../../../public/notcheckmark.png'

export default function Contribute(props: any) {

    const check = false;

    return (
        <div>
            <div className="absolute flex flex-row cursor-pointer justify-between top-[200px] w-[335px] h-[60px] rounded-xl pr-[24px] md:pr-[32px] md:pl-[20px] md:w-[410px] md:h-[112px] hover:bg-gray-500 md:rounded-lg text-white " >
                <div>
                    <Image src={pen} width={72} height={60} className="absolute" />
                </div>

                <div className='absolute pl-[90px] md:pl-[105px]'>Contribute 3 posts</div>

                <div className="absolute w-[180px] top-[30px] left-[90px] md:left-[120px] bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                    <div className="bg-green-600  h-5 rounded-full text-center" style={{ width: `${30}%` }}> 1/3</div>
                </div>

                <div className='absolute top-[20px] left-[300px] md:top-[20px] md:left-[310px]'>
                    {check && <Image src={checkmark} width={20} height={20} />}
                    {!check && <Image src={ncheckmark} width={20} height={20} />}
                </div>

            </div>
        </div>
    );
}