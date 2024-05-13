import TodoName from "./components/TodoName";
import TodoInput from "./components/TodoInput";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/Welcome";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    setTodos((currValue) => {
      const newItem = [
        ...currValue,
        {
          name: itemName,
          dueDate: itemDate,
        },
      ];
      return newItem;
    });
  };

  const handleDeleteItem = (itemName) => {
    const newItem = todos.filter((item) => item.name !== itemName);
    setTodos(newItem);
  };

  return (
    <center className="container">
      <TodoName />
      <TodoInput onNewItem={handleNewItem} />
      <WelcomeMsg todos={todos} />
      <TodoItems todo={todos} onDeleteItem={handleDeleteItem} />
    </center>
  );
}
export default App;
