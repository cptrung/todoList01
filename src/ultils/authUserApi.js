import AxiosService from './../commons/AxiosService';
//const url = "http://localhost:4000/task";

// function fetchTodolist() {
//   return AxiosService.get(url);
// }

// add task
function getTokensAuth(body) {
  return AxiosService.post(' http://localhost:4000/users/sigin',body)
}

// // delete
// function deleteTaskAPI(param) {
//   return AxiosService.delete(`${url}/${param}`);
// }

// //update
// function updateTaskAPI(body) {
//   return AxiosService.put(`${url}/${body._id}`,body)
// }

export const authUserApi = {
     getTokensAuth,
//   insertNewTaskAPI,
//   deleteTaskAPI,
//   updateTaskAPI
};
