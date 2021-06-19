import React, { useState, useEffect } from 'react';

const ExampleComponent = ({}) => {
  const [list, setList] = useState([]);
  const [isInput, setIsInput] = useState({
    0: true,
    1: false
  });
  useEffect(() => {
    setList({
      0: "hello",
      1: "world"
    });
  }, []);

  const setListText = (index, value) => {
    console.log(index, value);
    setList(prevList => {
      const newList = { ...prevList
      };
      newList[index] = value;
      console.log(newList);
      return newList;
    });
  };

  const toggleInput = index => {
    setIsInput(prevInput => {
      const newList = { ...prevInput
      };
      newList[index] = !newList[index];
      return newList;
    });
  };

  return React.createElement("ul", null, Object.keys(list).map((key, index) => {
    if (isInput[index]) {
      return React.createElement("li", null, React.createElement("input", {
        key: index,
        value: list[key],
        onChange: e => setListText(index, e.target.value),
        onBlur: () => toggleInput(index),
        autoFocus: true
      }));
    } else {
      return React.createElement("li", {
        key: index,
        onDoubleClick: () => toggleInput(index)
      }, list[key]);
    }
  }));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
