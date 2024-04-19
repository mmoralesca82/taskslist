const TodoList = ({todos, onCompleted, onRemoveTodo}) => {
    return (
        <ul className="flex flex-col gap-2">
          {todos?.map(todo => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                  data-id={todo.id} 
                  onChange={onCompleted}
                  checked={todo.completed}
                />
                <div className="w-full flex justify-between items-center">
                  
                  <span 
                    className={todo.completed ? 'line-through'  : ''}
                  >
                    {todo.title}
                  </span>
                   
                  <button
                    className="bg-red-300 rounded-lg px-2 py-2"
                    data-id={todo.id} 
                    onClick={onRemoveTodo}
                  >
                    {/* data-id: id es una varible customizada para tener un identificador a cada boton */}
                    ❌
                  </button>
                </div> 
              </li>
            )
          })}
        </ul>
    )
}

export default TodoList