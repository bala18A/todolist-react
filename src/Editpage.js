import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpage = ({editvalue,seteditvalue,handleeditsubmit,item}) => {
    const{id}=useParams()
    const finddata=item.find(data=>(data.id).toString()===id)
    useEffect(() => {
        if (finddata) {
            seteditvalue(finddata.skill)
          
        }
    
      }, [finddata,seteditvalue])

  return (
    
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
          <p style={{backgroundColor:"gray"}}>Edit page </p>
                <input type='text' value={editvalue} onChange={(e) => seteditvalue(e.target.value)} placeholder='edit item' />
                <button onClick={()=>handleeditsubmit(finddata.id)} type='submit'>submit</button>
            </form>
    </div>
  )
}

export default Editpage