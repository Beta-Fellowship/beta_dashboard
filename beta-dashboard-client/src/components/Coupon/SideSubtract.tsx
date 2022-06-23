export default function SideSubtract(props: any) {
    return (
        <div>
            <div className="absolute z-[1000] w-[72px] h-[164px] left-[0px] top-[0px] md:w-[72px] md:h-[164px] md:top-[0px] md:left-[0x] bg-[#FFD42B] rounded-l-xl " >{props.children}</div>
        </div>
    );
}