import React, { ReactElement } from 'react'
import { StyledFade } from './Fade.style'

const Fade = ({ children }: any): ReactElement => {
  return (
    <StyledFade>{children}</StyledFade>
  )
}

export { Fade }
