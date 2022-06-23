export default function OutCircle(props: any) {
    return (
        <div className="absolute rounded-full z-30 h-[70px] w-[70px] top-[72px] left-[132px] bg-gradient-to-r from-amber-300 to-lime-500 opacity-100 ">{props.children}</div>
    );
};