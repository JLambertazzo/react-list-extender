import React, { useState, useEffect } from 'react';

const ListExtender = ({
  placeholder,
  validators
}) => {
  const [list, setList] = useState({});
  const [isInput, setIsInput] = useState({});
  useEffect(() => {
    let addInput = true;
    Object.keys(list).forEach(key => {
      if (!list[key].trim() || !validate(list[key], parseInt(key))) {
        addInput = false;
      }
    });

    if (addInput) {
      setList(prevList => {
        const newList = { ...prevList
        };
        newList[Object.keys(newList).length] = "";
        return newList;
      });
      setIsInput(prevInput => {
        const newIsInput = { ...prevInput
        };
        newIsInput[Object.keys(newIsInput).length] = true;
        return newIsInput;
      });
    }
  }, [list]);

  const validate = (value, index) => {
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

  const setListText = (index, value) => {
    setList(prevList => {
      const newList = { ...prevList
      };
      newList[index] = value;
      return newList;
    });
  };

  const toggleInput = index => {
    if (isInput[index] && !list[index].trim()) {
      return;
    }

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
        placeholder: placeholder,
        onChange: e => setListText(index, e.target.value),
        onBlur: () => toggleInput(index),
        autoFocus: index !== Object.keys(list).length - 1
      }));
    } else {
      return React.createElement("li", {
        key: index,
        onDoubleClick: () => toggleInput(index)
      }, list[key]);
    }
  }));
};

export default ListExtender;
export { ListExtender };
//# sourceMappingURL=index.modern.js.map
