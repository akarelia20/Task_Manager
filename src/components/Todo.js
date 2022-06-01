import { BsTrashFill } from 'react-icons/bs'

const Todo = props => {
  const { todos, handleTododelete, handletoggleComplete } = props

  return (
    <div className='todo_list_parent'>
      {todos.map((todo, i) => {
        return (
          <div key={i} className='todo_item'>
            <div className='chkbox-txt'>
              <input
                className='chkbox'
                onChange={e => {
                  handletoggleComplete(i)
                }}
                checked={todo.completed}
                type='checkbox'
              />
              <p
                className={
                  todo.completed ? 'line-through todo_txt' : 'todo_txt'
                }
              >
                {todo.text}
              </p>
            </div>
            <BsTrashFill size={20} onClick={e => handleTododelete(i)} />
          </div>
        )
      })}
    </div>
  )
}

export default Todo
