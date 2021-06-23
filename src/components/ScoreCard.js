import React from 'react'



function ScoreCard(props)  {
  
return(
        <div className="col s12 m7">
    <div className="card small horizontal">
      <div className="card-image">
        <img src={props.avatar}  alt='' />
      </div>
      <div className="card-stacked">
        <div className="card-content">
  <h5>{props.name} </h5>
  <h6>Questions answered: {props.answered}</h6>
  <h6>Questions asked: {props.asked}</h6>

              

        </div>
        <div className="card-action blue lighten-3">
           <h6 style={{textAlign: 'center'}}>SCORE: {props.score} </h6>
        </div>
      </div>
    </div>
  </div>

        
      
)
  }
  
  
  
  export default ScoreCard
