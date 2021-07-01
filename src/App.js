
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
  return (
    <div className="App">
		<AddTodoForm/>
		<TodoList/>
		<TotalCompleteItems/>
    </div>
  );
}

export default App;
