import React, { Component } from "react";
import { connect } from "react-redux";

import { clear, inputNumber, inputOperator } from "./actions/actions.js";

import Button from "./components/Button";
import Display from "./components/Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.props.setDisplay(value);
  }

  render() {
    return (
      <div className="app-body">
        <div>
          <div className="calculator-title">
            <h1>ekino.</h1>
          </div>
          <div className="calculator-subtitle">
            <h2>Basic Calculator</h2>
          </div>
          <Display displayValue={this.props.displayValue} />
          <div className="button-container">
            <div className="button-row">
              <Button
                value="7"
                style="number"
                onClick={() => this.props.inputNumber("7")}
              />
              <Button
                value="8"
                style="number"
                onClick={() => this.props.inputNumber("8")}
              />
              <Button
                value="9"
                style="number"
                onClick={() => this.props.inputNumber("9")}
              />
              <Button
                value="+"
                style="operator"
                onClick={() => this.props.inputOperator("+")}
              />
            </div>
            <div className="button-row">
              <Button
                value="4"
                style="number"
                onClick={() => this.props.inputNumber("4")}
              />
              <Button
                value="5"
                style="number"
                onClick={() => this.props.inputNumber("5")}
              />
              <Button
                value="6"
                style="number"
                onClick={() => this.props.inputNumber("6")}
              />
              <Button
                value="-"
                style="operator"
                onClick={() => this.props.inputOperator("-")}
              />
            </div>
            <div className="button-row">
              <Button
                value="1"
                style="number"
                onClick={() => this.props.inputNumber("1")}
              />
              <Button
                value="2"
                style="number"
                onClick={() => this.props.inputNumber("2")}
              />
              <Button
                value="3"
                style="number"
                onClick={() => this.props.inputNumber("3")}
              />
              <Button
                value="/"
                style="operator"
                onClick={() => this.props.inputOperator("/")}
              />
            </div>
            <div className="button-row">
              <Button
                value="0"
                style="number"
                onClick={() => this.props.inputNumber("0")}
              />
              <Button
                value="."
                style="number"
                onClick={() => this.props.inputNumber(".")}
              />
              <Button
                value="="
                style="equals"
                onClick={() => this.props.inputOperator("=")}
              />
              <Button
                value="*"
                style="operator"
                onClick={() => this.props.inputOperator("*")}
              />
            </div>
            <div className="button-full-row">
              <Button value="CLEAR" style="clear" onClick={this.props.clear} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayValue: state.displayValue
  };
};

export default connect(
  mapStateToProps,
  { clear, inputNumber, inputOperator }
)(App);
