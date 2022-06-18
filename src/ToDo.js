import React from "react";
import "./ToDo.css";
import {ListItem, ListItemText, Button} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {db} from "./firebase";
import {deleteDoc, doc, serverTimestamp, setDoc} from "firebase/firestore";

function ToDo ({task, input, setInput}) {

    const editItem = id => {
        setDoc(doc(db, "ToDoList", id), {
          task: input,
          timestamp: serverTimestamp()
        });
        setInput("");
      }
    
      const removeItem = id => {
        deleteDoc(doc(db, "ToDoList", id));
      }
    
    return(
    <>
    <ListItem className="list-item">
        <ListItemText primary={task.task} secondary=""/>
    </ListItem>
    
    <Button onClick={() => editItem(task.id)} variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
    <Button onClick={() => removeItem(task.id)} variant="outlined" startIcon={<DeleteForeverIcon/>}>Delete</Button>
    </>
    );
}

export default ToDo;