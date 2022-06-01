import { AiOutlineArrowUp } from 'react-icons/ai'

const Form = props => {
  const { handlenewTodo, setNewTodo, newTodo } = props
  return (
    <div>
      <form
        onSubmit={e => {
          handlenewTodo(e)
        }}
      >
        <input
          className='input'
          placeholder='Add Todo.....'
          type='text'
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value)
          }}
        />
        <button className='addTodo_button'>
          <AiOutlineArrowUp size={30} />
        </button>
      </form>
    </div>
  )
}

export default Form
