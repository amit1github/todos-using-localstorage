import React, { useContext } from "react";
import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Delete, DoneAll } from "@mui/icons-material";

const Todos = ({todos, markComplete}) => {
//   const { todos, dispatch } = useContext(TodoContext);

  return (
    <Paper sx={{ width: 400, margin: "auto" }}>
      <List
        sx={{
          width: 400,
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "auto",
          marginTop: "20px",
          padding: "0",
        }}
      >
        {todos.map((todo) => (
          <ListItem key={todo.id} disableGutters>
            <ListItemText primary={todo.todoString} />
            <span
              sx={{ display: "flex", alignItems: "flex-end" }}
              onClick={() => markComplete(todo.id)}
            >
              <IconButton>
                <DoneAll />
              </IconButton>
            </span>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Todos;