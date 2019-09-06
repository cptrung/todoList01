import axios from 'axios';

// fetch data
//const url = "http://5d3ea855139f4200145328c1.mockapi.io/api/todolist";
const url = "http://localhost:4000/task";
function fetchTodolist(){
	 return axios({
     method: "GET",
     url
   });
}

// add task
function insertNewTaskAPI(newTask){
    console.log(newTask);
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
     url:`${url}/${task._id}`,
     data:task
   });
}

export const api = {
	fetchTodolist,
	insertNewTaskAPI,
  deleteTaskAPI,
  updateTaskAPI
}