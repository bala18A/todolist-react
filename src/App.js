
// import React, {  useState } from 'react'
// // import "./todolistinput box.css"
// import Header from './Header'

// import Content from './Content'
// import Foot from './Foot'
// import Additems from './Additems'


//   const App = () => {
//     const [data, setdata] = useState(JSON.parse(localStorage.getItem("todolist")))

//   const [inputvalue, setinputvalue] = useState('')
//   const [searchvalue, setsearchvalue] = useState('')


//   const handledelete = (id) => {
//     const listitems = data.filter(items =>
//       items.id !== id)
//     setdata(listitems)
//     localStorage.setItem("todolist",JSON.stringify(listitems))
//   }
//   const handlechange = (id) => {
//     const listitems = data.map(data =>
//       data.id === id ? { ...data, checked: !data.checked } : data)

//     setdata(listitems)
//     localStorage.setItem("todolist",JSON.stringify(listitems))

//   }
//   const handlesubmit = (e) => {
//     e.preventDefault()
//     if(!inputvalue.trim())
//     {
//       return 
//     }

//     additems(inputvalue)
//     // ===
//     setinputvalue('')
//   }
//   const additems = async(item) => {
//     const id = data.length ? data[data.length - 1].id + 1 : 1
//     const result = { id, checked: false, skill: item }
//     const listitems = [...data, result]
//     setdata(listitems)
//     localStorage.setItem("todolist",JSON.stringify(listitems))


//   }
//   return (
//    <div>

//      <Header header={'To Do List'} />
//       <div className='hole-content'>
//       <Additems
//         inputvalue={inputvalue}
//         setinputvalue={setinputvalue}
//         handlesubmit={handlesubmit}
//         searchvalue={searchvalue}
//         setsearchvalue={setsearchvalue} />
//       <Content
//         data={data.filter(items => items.skill.includes(searchvalue.toLowerCase()))} /* search venuna cmt remove*/
//         // data={data}//search venana ithu use pannu
//         setdata={setdata}
//         handledelete={handledelete}
//         handlechange={handlechange} />
//         </div>
//       <Foot footer={'Thank You'} />
//    </div>
//   );
// }

// export default App;
// ==============================without local storage================

import React, {  useState } from 'react'
// import "./todolistinput box.css"
import Header from './Header'

import Content from './Content'
import Foot from './Foot'
import Additems from './Additems'


  const App = () => {
    const [data, setdata] = useState([
      {id:1,checked:true,skill:'play'},
      {id:2,checked:true,skill:'play'},
      {id:3,checked:true,skill:'play'},
    ])
  const [inputvalue, setinputvalue] = useState('')
  const [searchvalue, setsearchvalue] = useState('')


  const handledelete = (id) => {
    const listitems = data.filter(items =>
      items.id !== id)
    setdata(listitems)
    // localStorage.setItem("todolist",JSON.stringify(listitems))
  }
  const handlechange = (id) => {
    const listitems = data.map(data =>
      data.id === id ? { ...data, checked: !data.checked } : data)

    setdata(listitems)
    // localStorage.setItem("todolist",JSON.stringify(listitems))

  }
  const handlesubmit = (e) => {
    e.preventDefault()
    if(!inputvalue.trim())
    {
      return 
    }

    additems(inputvalue)
    // ===
    setinputvalue('')
  }
  const additems = async(item) => {
    const id = data.length ? data[data.length - 1].id + 1 : 1
    const result = { id, checked: false, skill: item }
    const listitems = [...data, result]
    setdata(listitems)
    // localStorage.setItem("todolist",JSON.stringify(listitems))


  }
  return (
   <div>

     <Header header={'To Do List'} />
      <div className='hole-content'>
      <Additems
        inputvalue={inputvalue}
        setinputvalue={setinputvalue}
        handlesubmit={handlesubmit}
        searchvalue={searchvalue}
        setsearchvalue={setsearchvalue} />
      <Content
        data={data.filter(items => items.skill.includes(searchvalue.toLowerCase()))} /* search venuna cmt remove*/
        // data={data}//search venana ithu use pannu
        setdata={setdata}
        handledelete={handledelete}
        handlechange={handlechange} />
        </div>
      <Foot footer={'Thank You'} />
   </div>
  );
}

export default App;
// =======================================to do list without local storage insert edit button

// import React, { useState } from 'react'
// // import "./todolistinput box.css"
// import Header from './Header'

// import Content from './Content'
// import Foot from './Foot'
// import Additems from './Additems'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Editpage from './Editpage'


// const App = () => {
//   const [data, setdata] = useState([
//     { id: 1, checked: true, skill: 'play' },
//     { id: 2, checked: true, skill: 'play' },
//     { id: 3, checked: true, skill: 'cricket' },
//   ])
//   const [inputvalue, setinputvalue] = useState('')
//   const [searchvalue, setsearchvalue] = useState('')
//   const [editvalue, seteditvalue] = useState('')
//   const navigate = useNavigate()


//   const handledelete = (id) => {
//     const listitems = data.filter(items =>
//       items.id !== id)
//     setdata(listitems)
//     // localStorage.setItem("todolist",JSON.stringify(listitems))
//   }
//   const handlechange = (id) => {
//     const listitems = data.map(data =>
//       data.id === id ? { ...data, checked: !data.checked } : data)

//     setdata(listitems)
//     // localStorage.setItem("todolist",JSON.stringify(listitems))

//   }
//   const handlesubmit = (e) => {
//     e.preventDefault()
//     if (!inputvalue.trim()) {
//       return
//     }

//     additems(inputvalue)
//     // ===
//     setinputvalue('')
//   }
//   const additems = async (item) => {
//     const id = data.length ? data[data.length - 1].id + 1 : 1
//     const result = { id, checked: false, skill: item }
//     const listitems = [...data, result]
//     setdata(listitems)
//     // localStorage.setItem("todolist",JSON.stringify(listitems))


//   }
//   const handleeditsubmit = (id) => {
//     setdata(data.map(data => data.id === id ? { ...data, skill: `${editvalue}` } : data))
//     navigate('/')

//   }
//   return (
//     <div>

//       <Header header={'To Do List'} />


//       <Additems
//         inputvalue={inputvalue}
//         setinputvalue={setinputvalue}
//         handlesubmit={handlesubmit}
//         searchvalue={searchvalue}
//         setsearchvalue={setsearchvalue} />

//       {<Content
//         data={data.filter(items => items.skill.includes(searchvalue.toLowerCase()))} /* search venuna cmt remove*/
//         // data={data}//search venana ithu use pannu
//         setdata={setdata}
//         handledelete={handledelete}
//         handlechange={handlechange} />}

//       <Routes>

//         <Route path='edit/:id' element={<Editpage item={data} editvalue={editvalue}
//           seteditvalue={seteditvalue} handleeditsubmit={handleeditsubmit} />} />
//       </Routes>
//       <Foot footer={'Thank You'} />
//     </div>
//   );
// }

// export default App;