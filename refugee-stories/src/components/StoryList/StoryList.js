import React from "react";
import { connect } from "react-redux";

import { addStory } from "../../actions/";

class StoryList extends React.Component {
  state = {
    newStory: ""
  };

  handleChanges = e => {
    this.setState({ newStory: e.target.value });
  };

  addStory = e => {
    e.preventDefault();
    this.props.addStory(this.state.newStory);
    this.setState({ newStory: "" });
  };

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="newStory"
            value={this.state.newStory}
            onChange={this.handleChanges}
            placeholder="..."
          />
          <button onClick={this.addStory}>Submit</button>
          <div className="">
            {this.props.storyList.map(story => (
              <h4 key={story.id}>
                {story.title}
                {story.story}
              </h4>
            ))}
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  storyList: state.stories
});

export default connect(
  mapStateToProps,
  { addStory }
)(StoryList);
