import React from "react";

import About from "../About/About";
import Academic from "../Academic/Academic";
import AcademicPro from "../Academic/AcademicPro";
import Animation from "../Animation/Animation";
import Education from "../Education/Education";
import Header from "../Header/Header";


import Skills from "../Skills/Skills";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Academic></Academic>
          <Skills></Skills>
          <Education></Education>
        <AcademicPro></AcademicPro>
     <Animation></Animation>
     </div>
  );
};

export default Main;
