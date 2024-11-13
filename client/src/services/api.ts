//Service for api calls

import axios from 'axios';

const API_URL = 'http://localhost:5000/notify/'

//Post a todo item

export const createTodo = async(todo:{tittle:string}) =>{
    const res = await axios.post(API_URL,todo);
    return res.data;
}

//get all todos
export const getTodos = async () =>{
    const response = await axios.get(API_URL)
    return response.data;
};

//Delete todo by id
export const deleteTodo = async (id:number) =>{
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
};