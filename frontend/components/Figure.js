import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`

max-width: 600px;

img{
  border-radius: 5px;
  border: 1.5px dotted darkgrey
}

figCaption{
  font-style: italic;
  font-size: 1.5rem;
  padding-left: 3em;
 background-color: cornflowerblue;
 border-radius: 5px
}

`

export default function Figure({imageUrl, caption}){
return(
  <StyledFigure>
        <img src={imageUrl}/>
        <figcaption>Awesome Pic taken on {caption}</figcaption>
      </StyledFigure>
)
}