import React, { useState, useEffect } from "react";

interface ListExtenderProps {
  placeholder?: string;
  validators?: [
    (value: string, index?: number, list?: { [key: number]: string }) => boolean
  ];
}

export const ListExtender = ({
  placeholder,
  validators,
}: ListExtenderProps) => {
  const [list, setList] = useState<{ [key: number]: string }>({});
  const [isInput, setIsInput] = useState<{ [key: number]: boolean }>({});

  // on list changed
  useEffect(() => {
    let addInput = true;
    Object.keys(list).forEach((key) => {
      if (!list[key].trim() || !validate(list[key], parseInt(key))) {
        addInput = false;
      }
    });
    if (addInput) {
      setList((prevList) => {
        const newList = { ...prevList };
        newList[Object.keys(newList).length] = "";
        return newList;
      });
      setIsInput((prevInput) => {
        const newIsInput = { ...prevInput };
        newIsInput[Object.keys(newIsInput).length] = true;
        return newIsInput;
      });
    }
  }, [list]);

  // check if all validations pass
  const validate = (value: string, index?: number) => {
    if (!validators) {
      return true;
    }
    for (let validator of validators) {
      if (!validator(value, index, list)) {
        return false;
      }
    }
    return true;
  };

  // change the text of an element
  const setListText = (index: number, value: string) => {
    setList((prevList) => {
      const newList = { ...prevList };
      newList[index] = value;
      return newList;
    });
  };

  // change whether el is input or text
  const toggleInput = (index: number) => {
    if (isInput[index] && !list[index].trim()) {
      return;
    }
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
                placeholder={placeholder}
                onChange={(e) => setListText(index, e.target.value)}
                onBlur={() => toggleInput(index)}
                autoFocus={index !== Object.keys(list).length - 1}
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

export default ListExtender;
