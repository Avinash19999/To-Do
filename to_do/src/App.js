import { useState } from 'react';
import './App.css';

function App() {
  const[inputText, setInputText] = useState("");
  const[items, setItems] = useState([]);
  
  function handleChange(event){
    const input = event.target.value;
    setInputText(input);
  }
  
  function handleClick(){
    if(!inputText){
      return
    }
    else{
    setItems(prevValue=>
     [...prevValue,inputText]);
     setInputText("");
    }
  }

  function handleItemClick(id){
    const updateItems = items.filter((item,index)=>index!==id);
    setItems(updateItems);
  }
  return (
    <div>
    <div className="App">
    TO-DO List
    </div>
    <div className="inputArea">
    <input onChange={handleChange}className="textBox" placeholder="Enter your TODO" value ={inputText}></input>
    <button className="inputButton" onClick={handleClick}>+</button>
    <ul>
    {items.map((item,id)=> <li key ={id} onClick={()=>handleItemClick(id)}>{item}</li>)}
    </ul>
    </div>
    </div>
  );
}

export default App;
