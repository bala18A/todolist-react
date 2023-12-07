import React from 'react'

const Additems = ({ inputvalue, setinputvalue, handlesubmit, searchvalue, setsearchvalue }) => {
  return (
    // <div className='additems'>
    //   <form onSubmit={handlesubmit}>
    //     <input type='text' value={inputvalue} placeholder='Add Items ' onChange={(e) => setinputvalue(e.target.value)} />
    //     <br />
    //     <input type='text' value={searchvalue} placeholder='Search Items ' onChange={(e) => setsearchvalue(e.target.value)} />
    //     <br />
    //     <button type='submit'>Submit</button>
    //   </form>
   //=====================================new 
   
    < div className="container" >
      <form onSubmit={handlesubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Add Items</label>
          </div>
          <div className="col-75">
            <input type="text" id="fname" value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} name="firstname" placeholder="Add items.." />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Search Items</label>
          </div>
          <div className="col-75">
            <input type="text" id="lname" value={searchvalue} onChange={(e) => setsearchvalue(e.target.value)} name="lastname" placeholder="Search Items.." />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
      </div >
     
     
    
  )
}

export default Additems
