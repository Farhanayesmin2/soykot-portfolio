import React from 'react';
    import { Fade,JackInTheBox,Zoom } from "react-awesome-reveal";
const Animation = () => {
  return (
    <div className="text-white">
  

    <JackInTheBox direction="down">
      <p >I am an animated text</p>
    </JackInTheBox>
<Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>
    </div>
  );
};

export default Animation;