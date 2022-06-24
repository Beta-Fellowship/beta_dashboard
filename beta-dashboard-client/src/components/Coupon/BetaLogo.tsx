import Image from 'next/image'
import B from '../../../public/B.png'

export default function BetaLogo(props: any) {
    return (
        <div>
            <Image src={B}  width={14} height={20} className="absolute"/>
        </div>
    );
}