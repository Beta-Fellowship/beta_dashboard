import Link from "next/link";

export default function Redeem(props: any) {
    return (
        <div>
            <div className="absolute w-[153px] h-[22px] left-[110px] top-[90px] md:left-[95px]">
                Membership Coupon
            </div>

            <Link href='https://betafellow.com/'>
                <div className=" absolute flex flex-row cursor-pointer justify-center text-center bg-clip-padding w-[180px] h-[24px] left-[105px] top-[124px] md:left-[90px] md:top-[120px] bg-black rounded-[4px] tracking-wide text-white font-[Poppins] not-italic font-normal text-sm leading-[22px] pt-[2px] pr-[6px] " >
                    12000 BRP | Redeem
                </div>
            </Link>
        </div>
    );
}

{/* <div className=" flex text-center tracking-wide text-white font-[Poppins] not-italic font-normal text-sm leading-[22px] w-[80px] h-[22px] pr-1 pt-[2px] ">
                        8000 BRP
                    </div>
                    <div className="flex shrink text-center tracking-wide text-white font-[Poppins] not-italic font-normal text-sm leading-[22px] w-[67px] h-[22px] pl-3 pt-[2px]">
                        Redeem
                    </div> */}