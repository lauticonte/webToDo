import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

const data = [
  { id: 1, content: "Completar el curso de React", completed: true },
  { id: 2, content: "Completar el curso de Node", completed: false },
  { id: 3, content: "Meditar 10 minutos", completed: false },
];

function App() {
  const [todos, setTodos] = useState(data);
  const [themeLight, setThemeLight] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const themeClass = themeLight ? "light" : "dark";

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));

        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
