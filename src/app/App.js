import SplitScreenContainer from "../common/splitscreen/SplitScreenContainer";
import RegularList from "../common/lists/RegularList";
import SmallPersonListItem from "../features/people/SmallPersonListItem";
import LargePersonListItem from "../features/people/LargePersonListItem";
import people from "../features/people/data";

import "./App.css";

function App() {
  return (
    <>
      <SplitScreenContainer />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;