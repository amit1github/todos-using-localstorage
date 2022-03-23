import React, { useState } from "react";
import {
  Paper,
  InputBase,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { AddTask } from "@mui/icons-material";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please fill some value first");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    // method passing as props
    addTodos(todo);

    setTodoString("");
  };

  return (
    <Box sx={{ mx: "auto", width: 600 }}>
      <Paper
        onSubmit={handleSubmit}
        elevation={4}
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Write your Todos here...."
          inputProps={{ "aria-label": "write your todos here" }}
          value={todoString}
          onChange={(e) => setTodoString(e.target.value)}
        />
        <IconButton
          type="submit"
          size="large"
          color="primary"
          aria-label="submit"
          sx={{ p: "10px" }}
        >
          <AddTask fontSize="large" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default TodoForm;
