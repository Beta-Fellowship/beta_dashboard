import {Card, Points, Approx, OutCircle, LittleCircle, Linkdiv, Subtract, Annotation } from '../components'
import Link from 'next/link'
export default function EarnPoint(props: any) {
    return (
        <div>
            <Card>
                <Points />
                <Approx />
                <OutCircle />
                <LittleCircle>
                    <Linkdiv>
                        <Link href="https://www.google.com/">EARN POINTS</Link>
                    </Linkdiv>
                </LittleCircle>
                <Subtract>
                    <Annotation />
                </Subtract>
            </Card>
        </div>
    );
};