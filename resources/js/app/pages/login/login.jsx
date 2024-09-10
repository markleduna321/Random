import React from 'react'
import LoginImageSection from './_sections/LoginImageSection'
import LoginSection from './_sections/LoginSection'

export default function login() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <LoginImageSection/>
      <LoginSection/>
    </section>
  )
}
