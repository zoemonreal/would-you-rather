import React from 'react'
import { Link } from 'react-router-dom'



function ErrorPage()  {
  
return(
        <div className="col s12 m7">
    <div className="card small horizontal">
      
      <div className="card-stacked">
        <div className="card-content">
  <h5 className="red-text">Page does not exists! <Link to='/' className="btn">Go to Home</Link> </h5>
  

              

        </div>
        <div className="card-action">
          
        </div>
      </div>
    </div>
  </div>

        
      
)
  }
  
  
  
  export default ErrorPage
