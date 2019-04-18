import React from "react";
import ReactTextCollapse from "react-text-collapse";

const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: "... show more",
  expandText: "show less",
  minHeight: 70,
  maxHeight: 180,
  textStyle: {
    color: "white",
    fontSize: "8px"
  }
};

const Stories = props => {
  const { stories } = props;
  return (
    <>
      <div className="all-stories-container">
        {stories.map(story => {
          return (
            <section className="expandable-section" key={story.id}>
              <h1 className="story-header">{story.title}</h1>
              <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p className="story-text">{story.story}</p>
              </ReactTextCollapse>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
