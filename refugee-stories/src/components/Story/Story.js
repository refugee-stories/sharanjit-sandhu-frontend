import React from "react";

const Story = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.story}</h4>
      <h5>{props.source}</h5>
    </div>
  );
};

Story.defaultProps = {
  title: "",
  story: "",
  source: ""
};

export default Story;
