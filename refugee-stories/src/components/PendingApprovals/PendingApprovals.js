import React, { useEffect } from "react";
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

const Protected = props => {
  const { pending, approveStory, deleteStory, getPending } = props;
  console.log(pending);

  return pending ? (
    <>
      <div className="all-stories-container">
        {pending.map(story => {
          return (
            <section className="pending-section" key={story.id}>
              <h1 className="story-header">{story.title}</h1>
              <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p className="story-text">{story.story}</p>
              </ReactTextCollapse>
              <div className="button-div">
                <button
                  className="pending-button"
                  onClick={e => {
                    e.preventDefault();
                    approveStory(story.id, story);
                  }}
                >
                  Approve
                </button>
                <button
                  className="pending-button"
                  onClick={e => {
                    e.preventDefault();
                    deleteStory(story.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </>
  ) : (
    <div style={{ color: "white", background: "rgba(0, 0 ,0 ,0.7)" }}>
      No pending stories...
    </div>
  );
};

export default Protected;
