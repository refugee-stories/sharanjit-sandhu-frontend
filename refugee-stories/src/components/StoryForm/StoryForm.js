// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addStory } from "../../actions";

// class StoryForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       story: ""
//     };
//   }

//   handleChanges = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const newStory = {
//       title: this.state.title,
//       story: this.state.story
//     };
//     // console.log("fired", newStory);
//     this.props.addStory(newStory);
//     window.location = "/stories";
//     this.setState({
//       title: "",
//       story: ""
//     });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <form onSubmit={this.onSubmit}>
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={this.state.title}
//               onChange={this.handleChanges}
//               autoFocus
//             />
//             <textarea
//               type="text"
//               name="story"
//               placeholder="...add your story"
//               value={this.state.story}
//               onChange={this.handleChanges}
//             />
//             <button>Submit</button>
//           </form>
//         </div>
//         <div className="">
//           {this.props.stories.map(story => (
//             <div key={story.id}>
//               <p>{story.title}</p>
//               <p>{story.story}</p>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   stories: state.stories,
//   error: state.error,
//   story: state.story,
//   title: state.title
// });

// export default connect(
//   mapStateToProps,
//   { addStory }
// )(StoryForm);

import React, { Component } from "react";
import axios from "axios";

class StoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      story: "",
      source: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addStory = event => {
    event.preventDefault();
    axios
      .post("https://refugeestories-be.herokuapp.com/api/stories", this.state)
      .then(res => console.log(res));
    this.props.history.push("/stories");
    this.setState({
      title: "",
      story: "",
      source: ""
    });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.addStory}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChanges}
              autoFocus
            />
            <input
              type="text"
              name="source"
              placeholder="Source"
              value={this.state.source}
              onChange={this.handleChanges}
            />
            <textarea
              type="text"
              name="story"
              placeholder="...share your story"
              value={this.state.story}
              onChange={this.handleChanges}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </>
    );
  }
}

export default StoryForm;
