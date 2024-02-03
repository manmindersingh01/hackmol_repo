import React from 'react'

export default function Login() {
  const loginUser = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label htmlFor="email">email:</label>
        <input type="email" id="userEmail" placeholder='email...' /><label htmlFor="password">password:</label>
        <input type="password" id="userPassword" placeholder='password...' />
        <button type='submit'> login</button>
      </form>
    </div>
  )
}
