import { ChangeEvent, FunctionComponent } from "react";
import { ToDoModel } from "../models/to-do.model";
import { UpdateToDoDTO } from "../models/update-to-do.dto";

interface ToDoListItemProps {
  toDo: ToDoModel
  onStatusChanged: (id: number, nextToDo: UpdateToDoDTO) => any,
  onToDoDeleteClicked: (id: number) => any,
}

const ToDoListItem: FunctionComponent<ToDoListItemProps> = ({ toDo, onStatusChanged, onToDoDeleteClicked }) => {

  const handleChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const nextToDo: UpdateToDoDTO = {
      title: toDo.title,
      completed: changeEvent.target.checked
    };
    
    return onStatusChanged(toDo.id, nextToDo);
  };

  const handleDeleteClick = () => {
    onToDoDeleteClicked(toDo.id);
  }

  return (
    <div className="to-do-list-item">
      <div className="to-do-list-item__delete" onClick={handleDeleteClick}>X</div>
      <div className="to-do-list-item__title">{toDo.title}</div>
      <div className="to-do-list-item__completed">
        <input type="checkbox" checked={toDo.completed} onChange={handleChange} />
      </div>
    </div>
  );
}

export default ToDoListItem;