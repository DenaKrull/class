import React from 'react'

export default function Address(props) {
  return (
    <>
    <div>
      <div>{props.student.address.street}</div>
      <div>{props.student.address.city}</div>
      <div>{props.student.address.state}</div>
      <div>{props.student.address.zip}</div>
    </div>
    </>
  )
}
