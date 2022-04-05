import './App.css';
import NavBar from './modules/Layout/NavBar';
import ToDoList from './modules/ToDo/components/ToDoList';

function App() {
  return (
    <div className="app-shell">
      <NavBar></NavBar>
      <div className="app-shell__content">
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App;
