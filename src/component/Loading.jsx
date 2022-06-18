import React from 'react'
import '../css/Loading.css'
import image from '../logo192.png'

const Loading = ()=>{
return    <div className="loadingcontainer">
                    <div className="spinner">
                    <img src={image} alt="soap with foam , logo of the brand" />
                    </div> 
                    <div className="loader"></div>
          </div>
}

export default Loading