import { MdDelete } from 'react-icons/md'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import styled from 'styled-components'
import { Button } from './UI/Button';


const Todo = ({ todo, onDeleteTodo, onEditTodo, onToggleTodo }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [changeText, setChangeText] = useState(todo.todo)

  const openEditHandler = () => setIsOpenEdit((prev) => !prev)

  const inputValueHandler = (e) => setChangeText(e.target.value)

  const submitChangeHandler = () => {
    onEditTodo(todo.id, changeText)
    setIsOpenEdit((prev) => !prev)
  }


  return (
    <StyledContainer>
      <div className={todo.isCompleted ? 'comleted_todo' : 'todo'}>
        {isOpenEdit === true ? (
          <Edit_Form>
            <Input_Edit
              onChange={inputValueHandler}
              value={changeText}
              type="text"
            />

            <Button variants="ali1" variant="outlined" onClick={submitChangeHandler}>
              Save
            </Button>
          </Edit_Form>
        ) : (
          <>
            <Text>
              <Input
                onClick={() => onToggleTodo(todo.id)}
                checked={todo.isCompleted}
                type="checkbox"
              />
              <P>{todo.todo}</P>
            </Text>

            <Actions_Container>
              <AiFillEdit onClick={openEditHandler} />
              <Delete onClick={() => onDeleteTodo(todo.id)} />
            </Actions_Container>
          </>
        )}
      </div>
    </StyledContainer>
  )
}

export default Todo

const StyledContainer = styled.div`
  .completed_todo {
    padding: 15px;
    background-color: rgb(244, 244, 244);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: line-through 2px grey;

    .text {
      display: flex;
      gap: 10px;

      > p {
        color: grey;
        width: 100%;
        font-size: 18px;
        word-break: break-all;
      }
    }
  }

  .todo {
    padding: 15px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Edit_Form = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`
const Input_Edit = styled.input`
  padding: auto;
  border: 1px solid blue;
  width: 100%;
  font-size: 17px;
`
const Input = styled.input`
  padding: auto;
  width: 30px;
  font-size: 17px;
`
const Text = styled.div`
  display: flex;
  gap: 10px;
`
const P = styled.p`
  width: 100%;
  font-size: 18px;
  word-break: break-all;
`

const Actions_Container = styled.div`
  display: flex;
  gap: 15px;
`
const Delete = styled(MdDelete)`
  border-radius: 20px;
  background-color: #ebebeb;
  width: 30px;
  height: 20px;
`
