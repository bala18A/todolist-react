import React from 'react'
import "./index.css"
// import { Link } from 'react-router-dom'
const Content = ({data,handledelete,handlechange}) => {
  return (

    <div className='content'>
        {(data.length)?(
            <>
      
            <ul>
            {data.map(item=>
                <li key={item.id}>

                    <input className='input'  type='checkbox' checked={item.checked} onChange={()=>handlechange(item.id)} /><br/>
                    <span >{item.skill}</span><br/>
                    <button className='btn' onClick={()=>handledelete(item.id)}>Delete</button><br/>
                    {/* <Link to={`edit/${item.id}`}><button>Edit</button></Link> */}
                </li>)}
            </ul>
            </>
            ):<p className='empty'> Empty data List</p>}
    </div>
   
  )
}

export default Content