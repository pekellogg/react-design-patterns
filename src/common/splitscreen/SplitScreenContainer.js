import SplitScreen from "./SplitScreen";
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";

function SplitScreenContainer({ leftComponents, leftText, rightComponents, rightText }) {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHand
        components={leftComponents}
        mainHeader={leftText}
      />
      <RightHand
        components={rightComponents}
        mainHeader={rightText}
      />
    </SplitScreen>
  );
}

export default SplitScreenContainer;