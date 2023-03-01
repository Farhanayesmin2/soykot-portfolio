import React from 'react';
import About from '../About/About';
import Academic from '../Academic/Academic';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Academic></Academic>
            <Skills></Skills>

        </div>
    );
};

export default Home;