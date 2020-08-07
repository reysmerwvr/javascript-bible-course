/**
 * CHALLENGE 7-6 - SOLUTION
 *
 * Add one more button with color "secondary".
 * Also change styles of the existing and new buttons
 * using property "variant".
 *
 * You can use one of the following values:
 * "text", "flat", "outlined", "contained", "raised", "fab", "extendedFab"
 */
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedQty: 0 };
  }

  render() {
    return React.createElement(
      window["material-ui"].Button,
      {
        variant: this.props.variant,
        color: this.props.color,
        onClick: () =>
          this.setState({
            clickedQty: ++this.state.clickedQty
          })
      },
      this.state.clickedQty > 0
        ? `Button was clicked ${
            this.state.clickedQty
          } times`
        : "Click me!!!"
    );
  }
}

// button1
const button1 = React.createElement(MyButton, {
  color: "primary",
  variant: "outlined"
});

const buttonContainer1 = document.getElementById("button1");

ReactDOM.render(button1, buttonContainer1);

// button2
const button2 = React.createElement(MyButton, {
  color: "secondary",
  variant: "extendedFab"
});

const buttonContainer2 = document.getElementById("button2");

ReactDOM.render(button2, buttonContainer2);
