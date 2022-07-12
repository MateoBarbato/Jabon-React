import React, { useContext } from 'react'

import { ThemeContext } from './ThemeContext'

const NosotrosContainer = () => {
  const { theme } = useContext(ThemeContext)
  const themecondition = theme ? 'nosotros-black' : 'nosotros'

  return (
        <article className={themecondition}>
            <section className='card'>
            <div className="card-imagescontainer">
            <div className="img">
                <img src="https://i.postimg.cc/k48N2q4X/2b1ba362073647-5a83f37f02c06.png" alt="Collection of 6 soaps from the brand pacha" />
            </div>
            </div>
            <iframe src='https://my.spline.design/untitled-0ab79df5a652e3ac97f66e4aa3704993/' frameBorder='0' width='100%' height='100%'></iframe>
            <div className='card-text'>
            <h2 >JABOON es una compania lider en la fabricacion de jabones artesanales y 100% naturales.
            Con compromiso al medio ambiente y con el objetivo de lograr un cambio.
            </h2>
            <h2 >Debido a esto Jaboon se propuso que por cada set de jabones comprado, se aportara a la plantacion de un arbol en el Amazonas.
            </h2>
            <h2>
            Gracias por apoyar esta gran familia!
            </h2>
            </div>
            </section>
        </article>
  )
}

export default NosotrosContainer
