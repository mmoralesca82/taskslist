const Form = ({handleSubmit, handleChange, input}) => {
  return (
    <form className="flex items-center gap-2" 
    onSubmit={handleSubmit}>
      <input
        className="w-full border my-3 p-3"
        type="text"
        placeholder="¿Qué deseas hacer hoy?"
        required
        onChange={handleChange}
        value={input}
      />
      <input
      className="bg-blue-300 font-bold rounded-lg px-2 py-2 cursor-pointer"
        type="submit"
        value="Añadir"
      />
   </form>

    
  )
}

export default Form