import { FunctionComponent, useEffect, useState } from "react";
import { CreateToDoDTO } from "../models/create-to-do.dto";
import { ToDoModel } from "../models/to-do.model";
import { UpdateToDoDTO } from "../models/update-to-do.dto";
import ToDoService from "../services/to-do.service";
import CreateToDo from "./CreateToDo";
import ToDoListItem from "./ToDoListItem";

interface ToDoListProps {

}

const ToDoList: FunctionComponent<ToDoListProps> = () => {
  const [toDos, setToDos] = useState<Array<ToDoModel>>();

  useEffect(() => {
    updateToDosData();
  }, []);

  const onStatusChanged = (id: number, nextToDo: UpdateToDoDTO) => {
    ToDoService.updateToDo(id, nextToDo).finally(() => {
      updateToDosData();
    })
  }

  const handleNewToDoSubmission = (newToDo: CreateToDoDTO) => {
    ToDoService.addToDo(newToDo).then(() => {
      updateToDosData();
    });
  }

  const onToDoDeleteClicked = (id: number) => {
    ToDoService.deleteToDo(id).then(() => {
      updateToDosData();
    });
  }


  const updateToDosData = () => {
    return ToDoService.getToDos()
      .then(toDos => setToDos(toDos))
  }

  return (
    <div className="to-do-list">
      <CreateToDo onNewToDoSubmitted={handleNewToDoSubmission}></CreateToDo>
      {toDos?.map((toDo: ToDoModel) => (
        <div className="to-do-list__item" key={toDo.id}>
          <ToDoListItem toDo={toDo} onStatusChanged={onStatusChanged} onToDoDeleteClicked={onToDoDeleteClicked}></ToDoListItem>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;