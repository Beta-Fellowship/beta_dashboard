export default function CouponCard(props: any) {
    return (
        <div>
            <div className="relative w-[296px] h-[164px] left-[20px] top-[500px] md:w-[296px] md:h-[164px] md:top-[526px] md:left-[464px] bg-red-200 backdrop-blur-2xl rounded-l-xl " >{props.children}</div>
        </div>
    );
}