const TodoFilterControl = ({ filterStatus, setFilterStatus }) => {
  const handleClick = (status) => {
    setFilterStatus(status);
  };

  return (
    <div className="control-btn group">
      <button
        className={filterStatus === "all" ? "btn active" : "btn"}
        onClick={() => handleClick("all")}
      >
        Todos
      </button>
      <button
        className={filterStatus === "active" ? "btn active" : "btn"}
        onClick={() => handleClick("active")}
      >
        Activos
      </button>
      <button
        className={filterStatus === "completed" ? "btn active" : "btn"}
        onClick={() => handleClick("completed")}
      >
        Hechos
      </button>
    </div>
  );
};

export default TodoFilterControl;
