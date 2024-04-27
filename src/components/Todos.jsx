import styled from 'styled-components'

const Todos = ({ children }) => {
  return <List_Container>{children}</List_Container>
}



export default Todos

const List_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  background-color: #edeef6;
  border-radius: 4px;
  padding: 20px;
  width: 600px;
`
