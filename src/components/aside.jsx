import React from 'react';

const Aside = (props) => {
  return (
    <div className="side-bar">
      <img className="garage-banner" src="https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349" alt="side bar car" />
      <img className="garage-logo" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="lewagon garage-logo" />
      <h3>Garage {props.garage}</h3>
      <p>Our garage is the best, Reasonable prices, always on time, we are the best(and fictional).
      </p>
      {props.children}
    </div>
  );
};

export default Aside;
