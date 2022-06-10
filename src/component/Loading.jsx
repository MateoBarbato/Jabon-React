import React from 'react'
import '../css/Loading.css'
import image from '../soap.png'

const Loading = ()=>{
return    <div className="loadingcontainer">
                    <div class="spinner">
                    <img src={image} alt="soap with foam , logo of the brand" />
                    </div> 
                    <div class="loader"></div>
          </div>
}

export default Loading