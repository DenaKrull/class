import React, { useState } from 'react'
import useForm from './useForm';

export default function Form() {
  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');


  // const [formData, setFormData] = useState({ name: '', email: '' });
  const [formData, setFormData] = useForm({ name: 'Joe', email: '' });
  const { name, email } = formData;
  // return (
  //   <div>
  //     name: <input placeholder="name" value={name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
  //     email: <input type='email' value={email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
  //   </div>
  // )

  return (
    <div>
      name: <input placeholder="name" value={name} onChange={setFormData}  name="name" />
      email: <input type='email' value={email} onChange={setFormData} name="email"/>
    </div>
  )
}
