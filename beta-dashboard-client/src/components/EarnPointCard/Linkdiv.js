
function Linkdiv(props) {
    return (
        <div className="relative z-[99999] pt-4 pl-1 w-[65px] h-[60px] font-[Poppins] not-italic font-medium text-xs text-center tracking-wide uppercase text-transparent bg-gradient-to-r from-amber-300 to-lime-500 bg-clip-text ">{props.children}</div>
    );
}

export default Linkdiv;