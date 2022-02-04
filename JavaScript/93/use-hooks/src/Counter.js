import React, { useState, useEffect } from 'react'
import  useLocalStorage from './useLocalStorage'

export default function Counter() {

 const [count,setCount]= useLocalStorage('count',0)
 

  return (
    <>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)} >+</button>
      </div>

    </>
  )
}
