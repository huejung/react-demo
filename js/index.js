var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Codelab = function (_React$Component) {
  _inherits(Codelab, _React$Component);

  function Codelab() {
    _classCallCheck(this, Codelab);

    return _possibleConstructorReturn(this, (Codelab.__proto__ || Object.getPrototypeOf(Codelab)).apply(this, arguments));
  }

  _createClass(Codelab, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello ',
          this.props.name
        ),
        React.createElement(
          'h2',
          null,
          this.props.number
        ),
        React.createElement(
          'div',
          null,
          this.props.children
        )
      );
    }
  }]);

  return Codelab;
}(React.Component);

Codelab.propTypes = {
  name: React.PropTypes.string,
  number: React.PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name: 'Unknown'
};

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Codelab,
        { name: this.props.name, number: this.props.number },
        this.props.children
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(
  App,
  { number: 5 },
  'I am child'
), document.getElementById('root'));