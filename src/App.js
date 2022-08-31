import TodoList from './components/TodoList'
import todos from './components/TodoData'
import './App.css';

function App() {
  return (
    <div className="App">
      {todos.map((elt, i) =>
        < TodoList
        key = { i }
        erste = { elt.todo1 }
        zweite = { elt.todo2 }
        dritte = { elt.todo3 }
        vierte = { elt.todo4 }
        />
        
        )}
    </div>
  );
}

export default App;
