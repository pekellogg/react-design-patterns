import SplitScreenContainer from "../common/splitscreen/SplitScreenContainer";
import RegularList from "../common/lists/RegularList";
import SmallPersonListItem from "../features/people/SmallPersonListItem";
import SmallProductListItem from "../features/products/SmallProductListItem";
import LargePersonListItem from "../features/people/LargePersonListItem";
import LargeProductListItem from "../features/products/LargeProductListItem";
import Modal from "../common/modal/Modal";
import people from "../features/people/data";
import products from "../features/products/data";

import "./App.css";

function App() {
  return (
    <>
      <Modal />
      <SplitScreenContainer
        leftComponents={
          <>
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
        }
        leftText="People Data"
        rightComponents={
          <>
            <RegularList 
              items={products}
              resourceName="product"
              itemComponent={SmallProductListItem}
            />
            <RegularList 
              items={products}
              resourceName="product"
              itemComponent={LargeProductListItem}
            />
          </>
        }
        rightText="Products Data"
      />
    </>
  );
}

export default App;