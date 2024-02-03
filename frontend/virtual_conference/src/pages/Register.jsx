import React from 'react'
import { useState } from "react"

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const registerUser = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder='name...' value={data.name} onChange={() =>} />
        < label htmlFor="email">email:</>
        <input type="email" id="userEmail" placeholder='email...' /><label htmlFor="password">password:</label>
        <input type="password" id="userPassword" placeholder='password...' />
        <button type='submit'> Register</button>
      </form>
    </div>
  )
}
