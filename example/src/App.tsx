import React, { useState } from "react";

import ListExtender from "react-list-extender";
import "react-list-extender/dist/index.css";

const App = () => {
  const [values, setValues] = useState(['hello', 'world'])
  return (<div><ListExtender placeholder="Enter Text Here" values={values} />
  <button onClick={() => {
    console.log('running')
    setValues(['hello', 'something'])
  }}>Click Me</button></div>);
};

export default App;
