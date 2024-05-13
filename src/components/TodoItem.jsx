function TodoItem({ todoName, todoDate, onDeleteItem }) {
  return (
    <div className="container">
      <div className="row rowMod">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger buttonUpdate"
            onClick={() => onDeleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
