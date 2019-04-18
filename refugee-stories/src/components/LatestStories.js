import React, { useEffect, useState } from "react";
import axios from "axios";
import back from "../back.png";
import forward from "../forward.png";

const LatestStories = () => {
  const [latest, setLastest] = useState([]);
  let [index, setCurrentIndex] = useState(0);
  useEffect(() => {
    axios
      .get("https://refugeestories-be.herokuapp.com/api/stories/latest")
      .then(res => setLastest(res.data))
      .catch(err => console.log(err));
  });
  const indexForward = () => {
    if (index === 0) {
      setCurrentIndex(1);
      console.log(index);
    } else if (index === 1) {
      setCurrentIndex(2);
    } else {
      setCurrentIndex(0);
    }
  };

  const indexBackward = () => {
    if (index === 0) {
      setCurrentIndex(2);
      console.log(index);
    } else if (index === 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(1);
    }
  };

  return (
    <>
      <h1 className='header'>Latest Stories</h1>
      <div className="story-container">
        <img
          className="arrow"
          src={back}
          alt="back arrow"
          onClick={e => {
            e.preventDefault();
            indexBackward();
          }}
        />

        {latest.map(story => {
          if (latest.indexOf(story) === index) {
            return (
              <section className="story-section" key={story.id}>
                <h1 className="story-header">{story.title}</h1>
                <p className="story-text">{story.story}</p>
              </section>
            );
          }
        })}
        <img
          className="arrow"
          src={forward}
          alt="forward arrow"
          onClick={e => {
            e.preventDefault();
            indexForward();
          }}
        />
      </div>
    </>
  );
};

export default LatestStories;
