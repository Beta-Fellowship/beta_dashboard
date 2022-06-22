export default function OutCircle(props: any) {
    return (
        <div className="relative rounded-full z-[200] mt-[-20px] ml-[140px] h-[80px] w-[80px] bg-gradient-to-r from-amber-300 to-lime-500 opacity-50 ">{props.children}</div>
    );
};