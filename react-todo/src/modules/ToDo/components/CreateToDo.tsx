import { ChangeEvent, FunctionComponent, useState } from "react";
import { CreateToDoDTO } from "../models/create-to-do.dto";

interface CreateToDoProps {
  onNewToDoSubmitted: (newToDo: CreateToDoDTO) => any,
}

const CreateToDo: FunctionComponent<CreateToDoProps> = ({ onNewToDoSubmitted }) => {
  const [title, setTitle] = useState<string>('');
  const [shouldDisableSubmission, setShouldDisableSubmission] = useState<boolean>(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setTitle(nextValue);

    if (nextValue.length < 1) {
      setShouldDisableSubmission(true);
    } else {
      setShouldDisableSubmission(false);
    }
  }

  const handleAddToDo = () => {
    if (shouldDisableSubmission) {
      return;
    }

    const newToDo: CreateToDoDTO = {
      title
    };

    onNewToDoSubmitted(newToDo);
    return setTitle('');
  }

  return (
    <div className="create-to-do">
      <input type="text" placeholder="What ToDo?" onChange={handleTitleChange} value={title} autoComplete="off" />
      <button onClick={() => handleAddToDo()} disabled={shouldDisableSubmission}>Add</button>
    </div>
  );
}

export default CreateToDo;