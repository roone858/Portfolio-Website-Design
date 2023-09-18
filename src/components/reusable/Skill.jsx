import React from 'react'

export const Skill = (props) => {
  return (
     <div className="skill">
     <div className="bar">
       <span>{props.name}</span>
       <div className="fill" style={{ width: props.value }}></div>
     </div>
   </div>
  )
}
