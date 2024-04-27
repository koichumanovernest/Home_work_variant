import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from './UI/Button'
import styled from 'styled-components'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [errorText, setErrorText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (value.trim() === '') {
      setErrorText('Поле не должно быть пустым!')
    } else {
      addTodo(value)
      setValue('')
      setErrorText('')
    }
  }

  return (
    <Form_Container>
      <Form onSubmit={submitHandler}>
        <Input_Form
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter new todo"
        />

        <Button variants="ali2" variant="outlined" type="submit">
          Add Task
        </Button>

        {errorText && <Error>{errorText}</Error>}
      </Form>
    </Form_Container>
  )
}

TodoForm.propTypes = { addTodo: PropTypes.func.isRequired }

export default TodoForm

const Form_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
const Form = styled.form`
  display: flex;
  align-items: center;
`
const Input_Form = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 465px;
  font-size: 17px;
  height: 40px;
`
const Error = styled.p`
  position: absolute;
  color: red;
  top: 220px;
`
