import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "" // controlled input
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
