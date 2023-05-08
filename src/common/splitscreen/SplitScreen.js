import Pane from "./Pane";
import Container from "./Container";

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        { left }
      </Pane>
      <Pane weight={rightWeight}>
        { right }
      </Pane>
    </Container>
  );
};

export default SplitScreen;