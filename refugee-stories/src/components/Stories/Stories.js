// import React, { Component } from "react";

// export class Stories extends Component {
//   render() {
//     return <div>Stories here</div>;
//   }
// }

// export default Stories;

import React, { Component } from "react";

import Story from "../Story/Story";

class Stories extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Stories</h1>
          <div>
            {this.props.stories.map(story => {
              return (
                <Story
                  title={story.title}
                  key={story.id}
                  story={story.story}
                  id={story.id}
                  source={story.source}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

Story.defaultProps = {
  stories: []
};

export default Stories;
