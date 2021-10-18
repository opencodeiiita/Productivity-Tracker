import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const Todo = () => {
  const [inputList, setInputList] = useState({value:"",isStrike:false,createdAt:null,modifiedAt:null});
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const itemEvent = (event) => {
    setInputList({
      value:event.target.value,
      isStrike:false,
      createdAt:new Date().toLocaleString(),
      modifiedAt:new Date().toLocaleString()
    });
  };

  const listOfItems = () => {
    if(inputList.value===""){
      alert("Please Enter Something!");
    }
    else if(inputList.value && !toggleSubmit){
      setItems(
        items.map((arrElem,index)=>{
          if(index===isEditItem){
            return{...arrElem, value:inputList.value,modifiedAt:new Date().toLocaleString()};
          }
          return arrElem;
        })
      );
      setToggleSubmit(true);
      setInputList({...inputList,value:""});
      setIsEditItem(null);
    }
    else
    {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList({...inputList,value:""});
    }
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        if (index !== id) return arrElem;
        return;
      });
    });
  };



    const cutIt=(id)=>{
      setItems(
        items.map((item,index)=>{
          if(index===id){
            return{...item, isStrike:true};
          }
          return item;
        })
      );
      

    };

  const editItems = (id) => {
    let newEditItem=items.find((arrElem,index)=>{
      return id===index;
    });
    setToggleSubmit(false);
    setInputList(newEditItem);
    setIsEditItem(id);
  };
  
  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h2 className="todo-head"> ToDo List </h2>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            value={inputList.value}
            onChange={itemEvent}
          />
          {
            toggleSubmit ? <button onClick={listOfItems}> + </button> : <span className="fa-edit" id="edit" onClick={listOfItems}><EditIcon/></span>
          }

          <ol>
            {items.map((itemval, index) => {
              return (
                <>
                  <div className="todo_style">
                    <div className="timeCard">

                    </div>
                      <span className="fa-check"
                          onClick={()=>{
                            cutIt(index)}}>
                              <CheckIcon/>
                            </span>
                      <ul>
                        <li className="task" style={{textDecoration: itemval.isStrike?"line-through" :"none"}}>{itemval.value}</li>
                        {itemval.createdAt===itemval.modifiedAt?<li className="created">Created At: {
                            itemval.createdAt}</li>:
                        <li className="modified">Modified At: {itemval.modifiedAt}</li>}
                        <li></li>
                      </ul>
                      <span className="fa-edit"
                          onClick={()=>{
                              editItems(index);
                          }}><EditIcon/>
                      </span>
                      <span className="fa-trash-o" 
                          onClick={()=>{
                              deleteItems(index);
                          }}>
                            <DeleteIcon/>
                          </span>

                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;