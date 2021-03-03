import React, { ReactElement } from 'react'
import { StyledContainer } from './Container.style'

const Container = ({ children }: any): ReactElement => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export { Container }
