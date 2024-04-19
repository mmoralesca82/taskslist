const Stats = ({todos, completedTodos, totalTodos, cleanTasks }) => {
  return (
    <>
    {todos.length > 0 && (
      <div className="flex justify-between items-center">
      <span className="countTasks font-bold">{completedTodos} de {totalTodos}</span>
      <button 
      className="bg-blue-500 rounded-lg px-2 
      py-1 text-white
       hover:bg-blue-600 duration-300"
       onClick={cleanTasks}
       >Limpiar tareas completadas</button>
    </div>

    )}
    </>
  )
}

export default Stats