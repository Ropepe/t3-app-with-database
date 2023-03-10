'use client'

import { useRef, useState } from "react"

const AddContactForm = () => {

  const [data, setData] = useState([])
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const avatarRef = useRef()

  return (
    <form className="flex flex-col gap-5">
      <input className="h-10 rounded px-5" name='First name' ref={firstNameRef} placeholder="First name" />
      <input className="h-10 rounded px-5" name='Last name' ref={lastNameRef} placeholder="Last name" />
      <input className="h-10 rounded px-5" name='Email' ref={emailRef} placeholder="Email" />
      <input className="h-10 rounded px-5" name='Avatar' ref={avatarRef} placeholder="Avatar" />
      <button type="submit" className="h-10  w-full text-white border border-cyan-300">Submit</button>
    </form>
  )
}

export default AddContactForm