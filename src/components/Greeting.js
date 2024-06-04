import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const handleChangeText = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && <Output>It's good to see you</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
};
export default Greeting;
