import React from 'react'

const Nosotros = () => {
  return (
    <>
      <main>
        <article className="canvas">
          <iframe
            src="https://my.spline.design/untitled-0ab79df5a652e3ac97f66e4aa3704993/"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </article>

        <article className="nosotros-text-container">
          <section className="text">
            <h2>Gracias por confiar en Jaboon!</h2>
            <p>
              Somos una compania lider en la fabricacion de jabones artesanales y 100%
              naturales.
            </p>
            <p>
              Con compromiso al medio ambiente y con el objetivo de lograr un cambio la
              marca apunta hacia un futuro mejor.
            </p>
            <p>Bienvenido a la familia Jaboon</p>
          </section>
          <p className="creditos">Creado por Mateo Barbato</p>
        </article>

        <article className="email-form-container">
          <h2>Si quieres contactarme!</h2>
          <h4>
            Envia un mensaje con tu informacion de contacto y una descripcion de lo que
            quieres hacer y te contestare a la brevedad
          </h4>
          <form
            action="https://formsubmit.co/barbatomateocoderhouse@gmail.com"
            required
            method="POST"
          >
            <input type="text" name="name" required placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea
              placeholder="Your Message"
              className="contact-form-textArea"
              name="message"
              rows="2"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </article>
      </main>
    </>
  )
}

export default Nosotros
