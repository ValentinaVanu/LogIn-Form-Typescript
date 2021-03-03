import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';


export const StyledButton = styled(Button)`
  && {
    background-color: #f6a4eb;
    color: #fff;
    margin-top: 10px;
    width: 30rem;
    font-weight: 700;

    :hover {
      background-color: #f6a4eb;
    }
  }
`

export const StyledOutlinedInput = styled(OutlinedInput)`
  && {
    background-color: rgba(255, 255, 255, 0.2);
    width: 30rem;
  }
`

export const StyledInputAdornment = styled(InputAdornment)`
  && > p {
    color: #cbcbcb;
  }
`

export const StyledInputLabel = styled(InputLabel)`
  && {
    color: #fff;
  }
`

export const StyledPaper = styled(Paper)`
  && {
    background-color: #6772e5;
    max-width: 600px;
    float: right;
  }
`

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
    margin-top: 0px;
    background-color: rgba(255,255,255,0.2);
    width: 30rem;

    & > input {
      background-color: rgba(255,255,255,0.2);

    }

    & > label 
    {
      color: #cbcbcb;
    }
  }
`

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 0;
  padding: 3rem;
`
