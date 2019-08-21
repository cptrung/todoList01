import axios from 'axios';

// fetch data
const url = "http://5d3ea855139f4200145328c1.mockapi.io/api/todolist";
function fetchTodolist(){
	 return axios({
     method: "GET",
     url
   });
}

// add task
function insertNewTaskAPI(newTask){
	 return axios({
     method: "POST",
     url,
     data:newTask
   });
}

// delete 
function deleteTaskAPI(param){
   return axios({
     method: "DELETE",
     url:`${url}/${param}`,
     data:null
   });
}

//update
function updateTaskAPI(task){
   return axios({
     method: "PUT",
     url:`${url}/${task.id}`,
     data:task
   });
}

export const api = {
	fetchTodolist,
	insertNewTaskAPI,
  deleteTaskAPI,
  updateTaskAPI
}