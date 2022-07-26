import React from 'react'

const EmailContact = () => {
  return (
    <main className="email-contact-container">
      <div className="email-form-container">
        <h2>To contact me !</h2>
        <h4>Send a message with your info and i will contact you as soon as posible.</h4>
        <form action="https://formsubmit.co/your@email.com" required method="POST">
          <input type="text" name="name" required />
          <input type="email" name="email" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  )
}

export default EmailContact
