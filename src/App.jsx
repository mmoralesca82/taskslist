import { useState } from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import Form from "./components/Form"
import Stats from "./components/Stats"

const App = () => {
  const INITIAL_TODOS = [
    {
      id: '1',
      title: 'Aprender JS',
      completed: false
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(INITIAL_TODOS)
  const [input, setInput] = useState('') // equivale a [get, set]

  const handleChange = (event) => {
    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
   event.preventDefault(); // elimina la accion por defecto del elemento para que no actualice toda la pagina

    const newTodo = {
      id: crypto.randomUUID(), //crear un ID random
      title: input,
      completed: false
    }
    const updateTodos = [...todos, newTodo] // ...todos , los 3 puntos y el array toma toda la infor que tiene el array, es una foto.

    setTodos(updateTodos) // <- Nos ayuda a insertar un nuevo todo
    //console.log(input)
    //console.log('Agregando nueva tarea....')
 
    setInput('')
  } 

  const handleRemoveTodo = (event) => {
    //console.log('eliminando ua tarea...', event.target.dataset.id)

    //const {id} = event.target.dataset
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    setTodos(newTodos)


  }

  const handleCompleted = (event) => {
    const idSelected = event.target.dataset.id
    const isChecked = event.target.checked

    console.log(idSelected, isChecked)

    const newTodos = todos.map(todo =>{
      if(todo.id === idSelected){
        return {...todo, completed: isChecked} // Modificamos la propiedad completed
      }
      return todo // Deja el objeto sin modificaciones
    })

    setTodos(newTodos)

  }

const completedTodos = todos.filter(todo => todo.completed).length
const totalTodos = todos.length

 const cleanTasks = (event) => {
  const newTodos = todos.filter(todo => todo.completed !== true)
  setTodos(newTodos)
 }


  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      {/* <h1 className="text-2xl font-bold text-center">App</h1> */}

      <Header />
     
      <Form 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
      />
       

      <Stats
        todos={todos}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        cleanTasks={cleanTasks}
      />

      <section className="mt-8">
        <TodoList
          todos={todos}
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemoveTodo}
        />
      </section>

      {/*<pre>{JSON.stringify(todos, null, 2)}</pre> */}

    </main>
  )
}

export default App