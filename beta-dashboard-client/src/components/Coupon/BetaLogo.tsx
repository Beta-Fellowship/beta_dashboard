import Image from 'next/image'
import B from '../../../public/B.svg'

export default function BetaLogo(props: any) {
    return (
        <div>
            <Image src={B} alt="beta_logo" width={14} height ={21}  />
        </div>
    );
}