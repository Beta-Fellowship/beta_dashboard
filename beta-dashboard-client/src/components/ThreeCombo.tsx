import {BecomeFellow, Inviteafriend, SendMessage, Contribute} from '.'
export default function ThreeCombo(props: any) {
    return (
        <div className='absolute flex flex-col overflow-y-auto w-[1500px] h-[300px] top-[500px] space-y-50 md:w-[410px] md:h-[400px] md:left-[56px] md:top-[391px] md:flex-row '>
            
            <div><Inviteafriend/></div>
            
            <div><SendMessage/></div>

            <div><Contribute/></div>

            <div><BecomeFellow/></div>
        </div>
    );
};

{/* <div className='absolute flex flex-col overflow-y-auto space-y-4 w-[150px] h-[300px] gap-[46px] '> */}
