import React from 'react';

const Scroll = (props) => {
  return (
  	//the children of the Scroll is the Cardlist (you can see this in the App.js render function), 
  	//so we add props.children to display the Carlist inside the Scroll
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
     	{props.children}
    </div>
  );
};

export default Scroll;