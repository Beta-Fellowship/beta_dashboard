function Card(props) {
    return (
        <div className="absolute w-[353px] h-[194px] left-[56px] top-[236px] bg-gradient-to-r from-amber-300 to-lime-500/95 rounded-xl shadow-xl border" >{props.children}</div>
    );
}

export default Card;