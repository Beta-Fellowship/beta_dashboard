export default function CouponCard(props: any) {
    return (
        <div>
            <div className="absolute w-[296px] h-[164px] left-[0px] top-[0px] md:w-[296px] md:h-[164px] md:top-[5px] md:left-[4px] bg-white backdrop-blur-2xl rounded-xl " >{props.children}</div>
        </div>
    );
}