'use client'
import { NextPage } from "next"
import { useRef, useState } from "react"

interface IProps {
  onSubmit: (data: any) => void
}

const AddContactForm: NextPage = ({ onSubmit }: IProps) => {

  const [data, setData] = useState([])

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const avatarRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      'firstName': firstNameRef.current.value,
      'lastName': lastNameRef.current.value,
      'email': emailRef.current.value,
      'avatar': avatarRef.current.value,
    }
    onSubmit(data, e)

  }


  return (
    <form className="flex flex-col gap-5" onSubmit={submitHandler}>
      <input className="h-10 rounded px-5" name='First name' ref={firstNameRef} placeholder="First name" />
      <input className="h-10 rounded px-5" name='Last name' ref={lastNameRef} placeholder="Last name" />
      <input className="h-10 rounded px-5" name='Email' ref={emailRef} placeholder="Email" />
      <input className="h-10 rounded px-5" name='Avatar' ref={avatarRef} placeholder="Avatar" />
      <button type="submit" className="rounded h-10" style={{ background: '#0381ff' }}>Submit</button>
    </form >
  )
}

export default AddContactForm