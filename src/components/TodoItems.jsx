import TodoItem from "./TodoItem";

const TodoItems = ({ todo, onDeleteItem }) => {
  return (
    <div className="item-container">
      {todo.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
