import * as React from 'react';
import './App.scss';
import TodoList from "./components/todo-list";
import '../src/scss/_layout.scss'

const App: React.FC = () => {
  return (
      <div className="root">
        <TodoList/>
      </div>
  );
}

export default App;
