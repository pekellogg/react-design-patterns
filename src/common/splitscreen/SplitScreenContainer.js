import SplitScreen from "./SplitScreen";
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";

function SplitScreenContainer() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHand />
      <RightHand />
    </SplitScreen>
  );
}

export default SplitScreenContainer;