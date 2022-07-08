import {CouponCard, CutCircle, OtherSideCutCircle, SideSubtract, BetaLogo, BetaFellowshipText, Redeem} from '.'

export default function CouponCardCombo(props: any) {
    return (
        <div className='absolute'>
          <CouponCard>
            <CutCircle />
            <SideSubtract>
              <div className='absolute top-[75px] left-[30px] '>
                <BetaLogo />
              </div>
            </SideSubtract>
            <BetaFellowshipText/>
            <Redeem/>
            <OtherSideCutCircle />
          </CouponCard>
        </div>
    );
};