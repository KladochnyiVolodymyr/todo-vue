import axios from "axios";
function handleResponse(res) {
  return res.data;
}
export function getTodos() {
  return axios.get("http://localhost:3000/_api/tasks").then(handleResponse);
}
export function createTodo(todo) {
  return axios
    .post("http://localhost:3000/_api/tasks", todo)
    .then(handleResponse);
}
export function updateTodo(todo) {
  return axios
    .put(`http://localhost:3000/_api/tasks/${todo._id}`, todo)
    .then(handleResponse);
}
