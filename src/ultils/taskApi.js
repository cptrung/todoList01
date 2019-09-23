import AxiosService from './../commons/AxiosService';
const url = "http://localhost:4000/task";

function fetchTodolist() {
  AxiosService.instance.defaults.headers.access_token = localStorage.getItem('token');
  return AxiosService.get(url);
}

// add task
function insertNewTaskAPI(body) {
  return AxiosService.post(url,body)
}

// delete
function deleteTaskAPI(param) {
  return AxiosService.delete(`${url}/${param}`);
}

//update
function updateTaskAPI(body) {
  return AxiosService.put(`${url}/${body._id}`,body)
}

export const taskApi = {
  fetchTodolist,
  insertNewTaskAPI,
  deleteTaskAPI,
  updateTaskAPI
};
