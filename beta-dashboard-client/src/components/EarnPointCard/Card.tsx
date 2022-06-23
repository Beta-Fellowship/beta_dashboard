export default function Card(props: any) {
    return (
        <div className="absolute md:w-[353px] md:h-[194px] md:left-[56px] md:top-[236px] w-[335px] h-[194px] left-[20px] top-[218px] bg-gradient-to-r from-amber-300 to-lime-500/95 rounded-xl shadow-xl border z-10" >{props.children}</div>
    );
};