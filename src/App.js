import React, { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

import { Box, Typography } from "@mui/material";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({localTodos});
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const markComplete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
 
  return (
    <Box>
      <Typography variant="h3" align="center">
        Add Your Todo's
      </Typography>
      <TodoForm addTodos={addTodos} />
      <Todos todos={todos} markComplete={markComplete} />
    </Box>
  );
};

export default App;
