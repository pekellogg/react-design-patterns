import styled from "styled-components";

// flex: 1 makes L + R panes of equal space
const Pane = styled.div`
  flex: ${props => props.weight};
`;

export default Pane;