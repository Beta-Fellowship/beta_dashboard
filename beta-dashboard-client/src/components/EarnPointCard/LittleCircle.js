
function LittleCircle(props) {
    return (
        <div className="relative rounded-full z-[200] mt-[-75px] ml-[145px] h-[70px] w-[70px] bg-white opacity-60 box-border border-0 border-solid border-white border:opacity-40 shadow-xl backdrop-blur-2xl " >{props.children}</div>
    );
}

export default LittleCircle;