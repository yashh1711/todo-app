import axios from "axios";
import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(val) => {
          // console.log(val.target.value);
          const data = val.target.value;
          setTitle(data);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(val) => {
          const data = val.target.value;
          setDesc(data);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          axios
            .post("http://localhost:3000/add", {
              title: title,
              description: desc,
            })
            .then(() => {
              console.log("Todo Added");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
