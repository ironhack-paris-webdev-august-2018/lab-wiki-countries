import React from 'react';

function MyTest(props) {

  const myArray = props.proppyProp
  // myArray.forEach((el) => console.log(el.area))

  return (
    <div>
      Passing the data as props rather than reloading it:
      <ol>
        {myArray.map((el, idx) => <li key={idx} >{el.name.common}</li>)}
      </ol>
    </div>
  );
}

export default MyTest