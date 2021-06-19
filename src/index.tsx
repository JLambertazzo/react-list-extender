import React, { useState, useEffect } from "react";

interface Props {
  text?: string;
}

export const ExampleComponent = ({}: Props) => {
  const [list, setList] = useState<{ [key: number]: string }>([]);
  const [isInput, setIsInput] = useState<{ [key: number]: boolean }>({
    0: true,
    1: false,
  });

  useEffect(() => {
    setList({
      0: "hello",
      1: "world",
    });
  }, []);

  const setListText = (index: number, value: string) => {
    console.log(index, value);
    setList((prevList) => {
      const newList = { ...prevList };
      newList[index] = value;
      console.log(newList);
      return newList;
    });
  };

  const toggleInput = (index: number) => {
    setIsInput((prevInput) => {
      const newList = { ...prevInput };
      newList[index] = !newList[index];
      return newList;
    });
  };

  return (
    <ul>
      {Object.keys(list).map((key, index) => {
        if (isInput[index]) {
          return (
            <li>
              <input
                key={index}
                value={list[key]}
                onChange={(e) => setListText(index, e.target.value)}
                onBlur={() => toggleInput(index)}
                autoFocus
              />
            </li>
          );
        } else {
          return (
            <li key={index} onDoubleClick={() => toggleInput(index)}>
              {list[key]}
            </li>
          );
        }
      })}
    </ul>
  );
};
