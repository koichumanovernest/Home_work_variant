import Todo from './Todo'

const TodoList = ({ todos, onDeleteTodo, onEditTodo, onToggleTodo }) => (
  <>
    {todos?.map((todo) => (
      <Todo
        onToggleTodo={onToggleTodo}
        onEditTodo={onEditTodo}
        onDeleteTodo={onDeleteTodo}
        key={todo.id}
        todo={todo}
      />
    ))}
    
  </>
)

export default TodoList
