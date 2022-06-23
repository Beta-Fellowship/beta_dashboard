export default function LittleCircle(props: any) {
    return (
        <div className="absolute rounded-full z-40 h-[65px] w-[65px] top-[74px] left-[134px] bg-white opacity-60 box-border border-0 border-solid border-white border:opacity-40 shadow-xl backdrop-blur-2xl " >{props.children}</div>
    );
};