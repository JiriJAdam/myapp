import React from 'react';

function NumbersList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number}>{number * 3.14}</li> ); // 
      return ( <ul >{listItems}</ul>
      );
    }
    export default NumbersList;
    // KEY and VALUES...aka everything is JS is an object....