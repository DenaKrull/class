import React, { useState, useEffect } from 'react'

export default function Counter() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  const [state, setState] = useState({ count: 0, count2: 5 });
  const { count, count2 } = state;

  useEffect(() => {
    console.log('useEffect');
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
   const intervalId= setInterval(() => console.log(new Date().toLocaleTimeString()), 1000);

   return () => {
     clearInterval(intervalId);
    }
  });

  return (
    <>
      <div>
        {count}
        <button onClick={() => setState({ ...state, count: count + 1, count2 })} >+</button>
      </div>
      <div>
        {count2}
        <button onClick={() => setState({ ...state, count2: count2 + 1, count })} >+</button>
      </div>
    </>
  )
}
