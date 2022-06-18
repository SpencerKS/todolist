import {Button, TextField, List} from "@mui/material";
import ToDo from "./ToDo";
import {useEffect, useState} from "react";
import './App.css';
import {toDoCollectionRef } from "./firebase";
import { addDoc, onSnapshot, orderBy, query, serverTimestamp} from "firebase/firestore";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const action = onSnapshot(query(toDoCollectionRef, orderBy("timestamp", "asc")), snapshot => {
      setToDos(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id}}))
    });
    return () => {
      action();
    }
  }, []);

  const addItem = event => {
    event.preventDefault();
    addDoc(toDoCollectionRef, {
      task: input,
      timestamp: serverTimestamp()
    });
    setInput("");
  };
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form>
      <TextField id="standard-basic" label="Standard" variant="standard" value={input} onChange={event => setInput(event.target.value)}/>
      <Button type="submit" variant="contained" onClick={addItem}>Add Item</Button>
      </form>
      <List id="list" sx={{margin: "auto", width: "100%", maxWidth: 500}}>
        {toDos.map(t => (
          <>
          <ToDo task={t} input={input} setInput={setInput} />
          </>
        ))}
      </List>
    </div>
  );
}

export default App;
