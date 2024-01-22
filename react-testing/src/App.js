
import './App.css';
import Todo from './components/Todo';
function App() {
  const todos=[
    {
      id:1,
      title:"washing",
      completed:false
    },
    {
      id:2,
      title:"baking",
      completed:true
    }
  ]
  return (
    <div className="App">
      {
        todos.map((todo)=>{
          return (
            <Todo key={todo} todo={todo}/>
          )
        })
      }
   
    </div>
  );
}

export default App;
