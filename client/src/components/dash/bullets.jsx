import React from "react";


const Bullets = (props) => { 

  let bullets = props.props
   
  return (
    <>
      {bullets.map((bullet, index)=>{
        return (
          <tr className="task" data-id={`${index}`}>
            <td>{bullet.date}</td>
            <td>{bullet.action}</td>
            <td>{bullet.impact}</td>
            <td>{bullet.result}</td>
            <td>{bullet.feedback}</td>
            <td><a href="#">Delete</a></td>
          </tr>
        )
      })}
    </>
  );
}

export default Bullets;

