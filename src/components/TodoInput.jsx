import { useRef } from "react";

function TodoInput({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleOnClickButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row rowMod" onSubmit={handleOnClickButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>

        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-success buttonUpdate">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
