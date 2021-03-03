import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';


export const StyledButton = styled(Button)`
  && {
    background-color: #6772e5;
    margin-top: 2rem;
  }
`

export const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
`

export const StyledContent = styled.div`
  font-size: 22px;
  color: #6772e5;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledPaper = styled(Paper)`
  max-width: 500px;
  justify-self: end;
`
