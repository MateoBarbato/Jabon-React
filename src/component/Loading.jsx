import React from 'react'
import '../css/Loading.css'

const Loading = () => {
  return <div className="loadingcontainer">
                    <div className="spinner">
                    <img src={'https://i.postimg.cc/0jph12rR/soap-jaboon.png'} alt="soap with foam , logo of the brand" />
                    </div>
                    <div className="loader"></div>
          </div>
}

export default Loading
