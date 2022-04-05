import { CreateToDoDTO } from "../models/create-to-do.dto";
import { ToDoModel } from "../models/to-do.model";
import { UpdateToDoDTO } from "../models/update-to-do.dto";

const baseUrl = 'http://localhost:1337';

export const getToDos = () => {
  const url = `${baseUrl}/todos`;
  return fetch(url, {
    method: 'GET'
  }).then(res => res.json() as Promise<Array<ToDoModel>>);
}

export const addToDo = (newToDo: CreateToDoDTO) => {
  const url = `${baseUrl}/todos`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(newToDo),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json() as Promise<ToDoModel>);
}

export const updateToDo = (toDoId: number, nextToDo: Partial<UpdateToDoDTO>) => {
  const url = `${baseUrl}/todos/${toDoId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(nextToDo),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json() as Promise<ToDoModel>);
}

export const deleteToDo = (toDoId: number) => {
  const url = `${baseUrl}/todos/${toDoId}`;
  return fetch(url, {
    method: 'DELETE'
  }).then(res => res.json() as Promise<Array<ToDoModel>>);
}

const ToDoService = {
  getToDos,
  addToDo,
  updateToDo,
  deleteToDo
}

export default ToDoService;
