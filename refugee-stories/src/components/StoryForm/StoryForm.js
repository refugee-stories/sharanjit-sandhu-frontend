// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addStory } from "../../actions";

// class StoryForm extends Component {
//   state = {
//     newStory: ""
//   };

//   handleChanges = e => {
//     this.setState({ newStory: e.target.value });
//   };

//   // onSubmit = e => {
//   //   e.preventDefault();
//   //   if (this.state.title || this.state.story) {
//   //     //set error state
//   //     this.setState(() => ({ error: "Please add title and story!" }));
//   //   } else {
//   //     this.setState(() => ({ error: "" }));
//   //     console.log("Submitted!");
//   //   }
//   // };
//   onSubmit = e => {
//     e.preventDefault();
//   };

//   addStory = e => {
//     e.preventDefault();
//     this.props.addStory(this.state.newStory);
//     this.setState({ newStory: "" });
//   };

//   render() {
//     return (
//       <div>
//         {/* {this.state.error && <p>{this.state.error}</p>} */}
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={this.state.title}
//             onChange={this.handleChanges}
//             autoFocus
//           />
//           <textarea
//             type="text"
//             placeholder="...add your story"
//             value={this.state.story}
//             onChange={this.handleChanges}
//           />
//           <button onClick={this.addStory}>Submit</button>
//           <div className="">
//             {this.props.stories.map(story => (
//               <div key={story.id}>
//                 <p>{story.story}</p>
//                 <p>{story.title}</p>
//               </div>
//             ))}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   stories: state.stories
// });

// // export default StoryForm;
// export default connect(
//   mapStateToProps,
//   { addStory }
// )(StoryForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import { addStory } from "../../actions";

class StoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      story: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newStory = {
      title: this.state.title,
      story: this.state.story
    };
    this.props.addStory(newStory);
    this.setState({
      title: "",
      story: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChanges}
            autoFocus
          />
          <textarea
            type="text"
            name="story"
            placeholder="...add your story"
            value={this.state.story}
            onChange={this.handleChanges}
          />
          <button>Submit</button>
          <div className="">
            {this.props.stories.map(story => (
              <div key={story.id}>
                <p>{story.title}</p>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  stories: state.stories
});

// export default StoryForm;
export default connect(
  mapStateToProps,
  { addStory }
)(StoryForm);
