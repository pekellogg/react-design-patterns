const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {
        items.map((item, index) => (
          <ItemComponent
            key={`${item}-${index}`}
            {...{[resourceName]: item}}
          />
        ))
      }
    </>
  );
};

export default RegularList;