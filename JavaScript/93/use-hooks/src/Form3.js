import React, { useState } from 'react'
import useForm from './useForm'
import useLocalStorage from './useLocalStorage'


export default function Form3() {
  // const [state, setState] = useState({ numberVaccines: 4, iq: 0 });
  const [state, setState] = useLocalStorage('form3',{ vaccines: 4, iq: 0 });
  const { vaccines, iq } = state;
  return (
    <div>
      vaccines: <input type="number" name="vaccines" value={vaccines} onChange={e => setState({ ...state, vaccines: e.target.value })} />
      IQ: <input type="number" name="IQ" value={iq} onChange={e => setState({ ...state, iq: e.target.value })} />
    </div>
  )
}

