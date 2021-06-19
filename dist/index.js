function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

var ExampleComponent = function ExampleComponent(_ref) {
  _objectDestructuringEmpty(_ref);

  var _useState = React.useState([]),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = React.useState({
    0: true,
    1: false
  }),
      isInput = _useState2[0],
      setIsInput = _useState2[1];

  React.useEffect(function () {
    setList({
      0: "hello",
      1: "world"
    });
  }, []);

  var setListText = function setListText(index, value) {
    console.log(index, value);
    setList(function (prevList) {
      var newList = _extends({}, prevList);

      newList[index] = value;
      console.log(newList);
      return newList;
    });
  };

  var toggleInput = function toggleInput(index) {
    setIsInput(function (prevInput) {
      var newList = _extends({}, prevInput);

      newList[index] = !newList[index];
      return newList;
    });
  };

  return React__default.createElement("ul", null, Object.keys(list).map(function (key, index) {
    if (isInput[index]) {
      return React__default.createElement("li", null, React__default.createElement("input", {
        key: index,
        value: list[key],
        onChange: function onChange(e) {
          return setListText(index, e.target.value);
        },
        onBlur: function onBlur() {
          return toggleInput(index);
        },
        autoFocus: true
      }));
    } else {
      return React__default.createElement("li", {
        key: index,
        onDoubleClick: function onDoubleClick() {
          return toggleInput(index);
        }
      }, list[key]);
    }
  }));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
