import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "Toronto", "San Fransisco", "Washington", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const onClickButton = (item: string) => {
    console.log("item");
  };

  const [isAlertVisible, setIsAlertVisible] = useState(true);

  return (
    <>
      {isAlertVisible && (
        <Alert onClose={() => setIsAlertVisible(false)}>fafafff</Alert>
      )}
      <Button>Button</Button>
      {/* <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </>
  );
}

export default App;
