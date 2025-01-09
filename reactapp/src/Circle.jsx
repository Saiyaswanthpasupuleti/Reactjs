import React, { useState } from 'react'

export default function Circle() {
    const [circle,SetCircle]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const radius=Math.floor(Math.random()+(200-150+1))

        const newcircle={
            x:e.clientX,
            y:e.clientY,
            radius
        }

        const handleCircle=[...circle,newcircle]

        if(handleCircle.length>1){
            SetCircle([])
        }
        else{
            SetCircle(handleCircle)
        }


    }

  return (
    <div onClick={handleClick} style={{position:"relative",height:"100vh",width:"100vw"}}>
        {circle.map((a)=>(
            <div style={{position:"absolute",border:"2px solid black",borderRadius:"50%",height:a.radius*2,width:a.radius*2,top:a.y-a.radius,left:a.x-a.radius}}>

                </div>
        ))}
    
      
    </div>
  )
}
