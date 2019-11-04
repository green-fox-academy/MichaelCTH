import React from 'react';
import ReactDOM from 'react-dom';
// import FirstComponent from './first-component';
import SecondComponent from './second-component';

// const element = <FirstComponent />;
// const element = <SecondComponent title="My nice title" />
const element = <SecondComponent items={['a', 'b', 'c']} />;

ReactDOM.render(element, document.getElementById('react-container'));

// alert(element.props.children);
