import React, { ReactElement } from 'react';


import * as SA from './About.style'

const About = (): ReactElement => {
  return (
    <SA.StyledPaper elevation={6}>
      <SA.StyledContent>
        <SA.StyledTitle>Build beautiful, smart checkout flows</SA.StyledTitle>
        <h4>About Publicis Sapient</h4>
        <div>
          Publicis Sapient is a digital business transformation company, founded in Cambridge, Massachusetts in 1990 by Jerry Greenberg and J. Stuart Moore. On February 6, 2015, Sapient became a fully owned division of French advertising giant Publicis.
        </div>
        <SA.StyledButton variant="contained" color="primary">Click to watch my Video</SA.StyledButton>
      </SA.StyledContent>
    </SA.StyledPaper>
  )
}

export { About }
