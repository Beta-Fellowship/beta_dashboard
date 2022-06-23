import {CouponCard, CutCircle, OtherSideCutCircle, SideSubtract, BetaLogo} from '.'

export default function EarnPoint(props: any) {
    return (
        <div>
          <CouponCard>
            <CutCircle />
            <SideSubtract>
              <BetaLogo />
            </SideSubtract>
            <OtherSideCutCircle />
          </CouponCard>
        </div>
    );
};