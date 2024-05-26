// import React, { useState } from 'react'

// function TodoList() {
//     const [inputList, setInputList] = useState("");
//     const [items,setItems] = useState([])

//     const itemEvent =(e)=>{
//         setInputList(e.target.value)
//     }

//     const listOfItems=()=>{
//       setItems((oldItems)=>{
//         return[...oldItems,inputList];
//       })
//       setInputList("")
//     }

//     const deletItems=(id)=>{
//          setItems((oldItems)=>{
//             return oldItems.filter((arrElem,index)=>{
//                 return index !== id;
//             })
//          })
//     }
//   return (
//     <div>
//       <h1>To Do list</h1> 
//       <br /><br />
//       <input type="text" placeholder='Add a items' value={inputList} onChange={itemEvent} />
//       <button onClick={listOfItems}>+</button>
//       <br /><br /><br />
//       {
//         items.map((itemval,index)=>{
//             return <div key={index} id='id'>
//             <button onClick={() => deletItems(index)}>X</button>
//             <li>{itemval}</li>
//             </div>
//         })
//       }
//     </div>
//   )
// }

// export default TodoList


import React, { useState } from 'react';

function TodoList() {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <br />
      <div className="input-container">
        <input
          type="text"
          placeholder="Add an item"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems} disabled={!inputList}>+</button>
      </div>
      <br />
      <br />
      <ul className="item-list">
        {items.map((itemval, index) => {
          return (
            <div className="item" key={index}>
              <button id='delet-btn' onClick={() => deleteItems(index)}>X</button>
              <li>{itemval}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
