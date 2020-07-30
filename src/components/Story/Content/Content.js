import React, { useState, useEffect } from "react";
import StorySegment from "./StorySegment/StorySegment";

const STORIES = [
  "I am a self-taught front-end engineer who has studied mechatronics engineering at faculty of engineering Mansoura university in Egypt. Before taking web development as a career and before graduation I've spent quite long time exploring to find what I want to do with my life, starting from learning arduino, c++, electronics for embedded systems, through Solidworks, Fusion360 and Ansys for mechanical modeling and analysis.",
  "I have spent the last two years of my university working on designing mechanical systems such as air conditioning ducts, fire fighting and medical gases systems for hotels, hospitals, schools etc. using AutoCad and Revit. After I took Revit Certified Professional Certificate in 2016 I thought I found the career of my life and started to prepare for the UTW internship at ECG and after passing tests and interviews I was accepted.",
  "During the internship I have learned a lot of things technically and most importantly personally, the staff was really great and powerful and I was extremely happy when they announced I am the best member and I will land my first ever job in such a great corporation by such a great engineers and management.",
  "After graduation it was time to start my job, but by then I had been working on my graduation project which was firefighting, plumping and medical gases system for a hospital. It was then when I realized this is not what I want to spend my whole life doing. Once I finished my 1st project in the internship I knew that every single project will go into the same process and end up a photo copy of it which is not that much of learning and challenge. It could have been a great job for me if I love monotonous work, but I absolutely don't.",
  'I then decided I should give programming another try but definitely not embedded systems again which I did not enjoy at the first place besides I lack the environment to do real world projects. After that I found myself out of no where searching "How to become a web developer" and the journey started.',
];

function Content() {
  let [maxStoryCardHeight, setHeight] = useState(0);

  useEffect(() => {
    let stories = document.getElementsByClassName("story-card");
    if (stories.length > 0) {
      stories = Array.from(stories);
      let maxHeight = 0;
      for (let story of stories) {
        let style = getComputedStyle(story);
        let height = parseInt(style.getPropertyValue("height"));
        maxHeight = height > maxHeight ? height : maxHeight;
      }
      setHeight(maxHeight);
    }
  });
  let storiesJSX = STORIES.map((story, index) => (
    <StorySegment
      key={index}
      content={story}
      number={index + 1}
      height={maxStoryCardHeight}
    />
  ));

  return (
    <main className="content">
      <div className="my-container">{storiesJSX}</div>
    </main>
  );
}

export default Content;
