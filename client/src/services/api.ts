//Service for api calls

import axios from 'axios';


//Create  a todo item
export const createTodo = async(todo:{title:string,completed:boolean}) =>{
    const API_URL = 'http://localhost:5000/notify/newTodo'
    const res = await axios.post(API_URL,todo);
    return res.data;
}

//get all todos
export const getTodos = async () =>{
    const API_URL = 'http://localhost:5000/notify/todos'
    const response = await axios.get(API_URL)
    return response.data;
};

//Update a todo
export const updateTodo = async(id:number) =>{
    const API_URL = 'http://localhost:5000/notify/newTodo'
    const res = await axios.put(`${API_URL}/${id}`);
    return res.data;
}

//Delete todo by id
export const deleteTodo = async (id:number) =>{
    const API_URL = 'http://localhost:5000/notify/deltodo/:id'
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
};