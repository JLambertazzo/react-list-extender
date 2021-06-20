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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ListExtender = function ListExtender(_ref) {
  var placeholder = _ref.placeholder,
      validators = _ref.validators;

  var _useState = React.useState({}),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = React.useState({}),
      isInput = _useState2[0],
      setIsInput = _useState2[1];

  React.useEffect(function () {
    var addInput = true;
    Object.keys(list).forEach(function (key) {
      if (!list[key].trim() || !validate(list[key], parseInt(key))) {
        addInput = false;
      }
    });

    if (addInput) {
      setList(function (prevList) {
        var newList = _extends({}, prevList);

        newList[Object.keys(newList).length] = "";
        return newList;
      });
      setIsInput(function (prevInput) {
        var newIsInput = _extends({}, prevInput);

        newIsInput[Object.keys(newIsInput).length] = true;
        return newIsInput;
      });
    }
  }, [list]);

  var validate = function validate(value, index) {
    if (!validators) {
      return true;
    }

    for (var _iterator = _createForOfIteratorHelperLoose(validators), _step; !(_step = _iterator()).done;) {
      var validator = _step.value;

      if (!validator(value, index, list)) {
        return false;
      }
    }

    return true;
  };

  var setListText = function setListText(index, value) {
    setList(function (prevList) {
      var newList = _extends({}, prevList);

      newList[index] = value;
      return newList;
    });
  };

  var toggleInput = function toggleInput(index) {
    if (isInput[index] && !list[index].trim()) {
      return;
    }

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
        placeholder: placeholder,
        onChange: function onChange(e) {
          return setListText(index, e.target.value);
        },
        onBlur: function onBlur() {
          return toggleInput(index);
        },
        autoFocus: index !== Object.keys(list).length - 1
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

exports.ListExtender = ListExtender;
exports.default = ListExtender;
//# sourceMappingURL=index.js.map
