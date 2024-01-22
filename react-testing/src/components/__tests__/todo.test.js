import {render,screen,cleanup} from "@testing-library/react"
import Todo from "../Todo"
afterEach(()=>{
    cleanup()
})
test("should render to do uncompleted component",()=>{
    const todo= {
        id:1,
        title:"washing",
        completed:false
      }
    render(<Todo todo={todo}/>);
    const todoElement=screen.getByTestId(`todo-${todo.id}`)
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent("washing");
})
test("should render to do completed component",()=>{
    const todo= {
        id:2,
        title:"baking",
        completed:true
      }
      
    render(<Todo todo={todo}/>);
    const todoElement=screen.getByTestId(`todo-${todo.id}`)
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent("baking");
    expect(todoElement).toContainHTML('<strike>')
})
//testing with snapshot