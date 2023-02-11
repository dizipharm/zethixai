import { Component, useState } from "react";
import "./AutoComplete.styles.scss";

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.props.suggestions.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div className="srchList">
        <ul>
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                this.suggestionSelected(item);
                this.props.onClickData(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="auto-complete-div">
        <input
          value={text}
          name={this.props.name}
          onChange={this.onTextChanged}
          onKeyDown={this.onKeyDown}
          type="text"
          placeholder={this.props.placeholder}
          className="form-control"
          autoComplete="off"
        />

        <div className="col-md-12 justify-content-md-center">
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }
}
export default AutoComplete;
