import React from "react";
import { useRouteError } from "react-router-dom";
import './index.scss';

const Notfound = () => {
  
  const error = useRouteError(); 
  
  return(
    <div className="container_error">
      <div className="container_messenger">
        <h1>404</h1>
        <h1>not found</h1>
      </div>
    </div>
  )
}

export default Notfound;