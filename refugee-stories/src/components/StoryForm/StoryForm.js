import React, { Component } from "react";

class StoryForm extends Component {
  state = {
    title: "",
    story: ""
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onStoryChange = e => {
    const story = e.target.value;
    this.setState(() => ({ story }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title || this.state.story) {
      //set error state
      this.setState(() => ({ error: "Please add title and story!" }));
    } else {
      this.setState(() => ({ error: "" }));
      console.log("Submitted!");
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
            autoFocus
          />
          <textarea
            type="text"
            placeholder="Story"
            value={this.state.story}
            onChange={this.onStoryChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default StoryForm;
