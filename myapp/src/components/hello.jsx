import React from 'react'

export const Hello = (props) => {

    
    const bornYear=()=>{
        const currYear=new Date().getFullYear()
        return currYear-props.age
        
    }
   

  return (
    <div>
        <p>hello {props.name} you're {props.age} year(s) old you study at {props.school}</p>
        <p>so you were born in {bornYear()}</p>
    </div>
    
  )
}
