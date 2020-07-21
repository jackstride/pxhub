import React, { Fragment } from 'react';
import Header from '../Components/Website/Header';
import HeaderImage from '../images/header_image.png';
import FeaturesCard from '../Components/Website/FeaturesCard';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="inner_container header_organised">
        <div className="grid_column_2">
          <div className="header_message">
            <h1>
              Get organised<br></br> the easey way
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptates qui nihil ducimus sequi optio consectetur fugiat
              aliquam voluptas corrupti!
            </p>
            <button className="cta">Sign up!</button>
          </div>
          <div className="header_image">
            <img src={HeaderImage} alt="Get organised" />
          </div>
        </div>
      </div>
      <div className="inner_container features one">
        <div className="features_section">
          <h4>Well Organised</h4>
          <h2>Simple and ready to use</h2>
          <p>
            <span>Lorem ipsum dolor sit amet,</span> consectetur adipisicing
            elit. Beatae odit explicabo quidem dolores? Aperiam provident odio,
            facilis
            <span> inventore sint quo, unde eveniet </span> quasi adipisci,
            facere minus blanditiis quam quas quidem?
          </p>
        </div>
        <div className="features_section">
          <h4>.</h4>
          <h2>.</h2>
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <span>consectetur adipisicing elit.</span> Beatae odit explicabo
            quidem dolores? Aperiam provident odio, facilis inventore sint quo,
            unde eveniet quasi adipisci, facere minusblanditiis quam quas
            quidem?
          </p>
        </div>
      </div>
      <div className="inner_container features two">
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </div>
    </Fragment>
  );
};

export default Home;
