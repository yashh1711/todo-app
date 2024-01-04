import axios from "axios";
export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
          <button
            onClick={() => {
              axios
                .put("http://localhost:3000/completed", {
                  id: todo._id,
                })
                .then(function (e) {
                  console.log(e);
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            {todo.completed === true ? "Completed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
