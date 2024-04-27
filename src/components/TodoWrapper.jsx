import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { generateId } from '../utils'
import Todos from './Todos'
import { Button } from './UI/Button'
import { styled } from 'styled-components'

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (todo) => {
    const newTodo = {
      todo,
      id: generateId(),
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((item) => item.id !== id))

  const editTodoHandler = (id, changeText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { todo, todo: changeText } : todo))
    )
  }

  const toggleTodoHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const deleteAllHandler = () => setTodos([])

  const completeAllHandler = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        isCompleted: true,
      }))
    )
  }

  const unCompleteAllHandler = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        isCompleted: false,
      }))
    )
  }

  return (
    <Wrapper>
      <Title>TODO LIST</Title>

      <TodoForm addTodo={addTodoHandler} />
      <ButtonDiv>
        <Button variants="ali3" variant="contained" onClick={deleteAllHandler}>
          Delete All
        </Button>

        <Button variants="ali4" variant="Warning" onClick={completeAllHandler}>
          Completed All
        </Button>

        <Button variants="ali5" variant="Danger" onClick={unCompleteAllHandler}>
          UnComplted All
        </Button>
      </ButtonDiv>

      {todos.length === 0 ? (
        <No_Todos_Text>empty</No_Todos_Text>
      ) : (
        <Todos>
          <TodoList
            onToggleTodo={toggleTodoHandler}
            onEditTodo={editTodoHandler}
            onDeleteTodo={deleteTodoHandler}
            todos={todos}
          />
        </Todos>
      )}
    </Wrapper>
  )
}

export default TodoWrapper

const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`
const Title = styled.h1`
  color: #6e708a;
  margin-bottom: 20px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
`
const No_Todos_Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  gap: 20px;
  margin-top: 15px;
  background-color: #edeef6;
  border-radius: 4px;
  text-align: center;
  border: 5px dashed rgb(123, 121, 121);
  opacity: 0.5;
  color: red;
  padding: 20px;
  width: 600px;
`
