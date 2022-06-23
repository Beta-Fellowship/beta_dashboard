export default function Linkdiv(props: any) {
    return (
        <div className="absolute z-50 w-[65px] h-[36px] left-[0px] top-[17px] font-[Poppins] not-italic font-medium text-xs text-center tracking-wide uppercase text-transparent bg-gradient-to-r from-amber-300 to-lime-500 bg-clip-text ">{props.children}</div>
    );
};