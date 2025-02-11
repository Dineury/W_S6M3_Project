import React from "react"
import Figure from "./Figure"
import styled from 'styled-components'

const StyledCard = styled.div`


border: 1px solid black;
background-color: slateblue;
padding: 1rem;
border-radius: 15px;

h2{
color: ${pr => pr.$color};
margin: 0 0 1rem 0;
font-size: 2.6em;
}

p{
margin: 0 0 1.5rem 0;

&::first-line {
    font-size: 1.5em;
}
}
`

export default function Card({ title, text, imageUrl, date }) {
    return (
    <StyledCard $color="seashell" className='card'>
          <h2>{title}</h2>
          <p>{text}</p>
          <Figure 
          imageUrl={imageUrl}
          caption={date}
    
             />
        </StyledCard>
    )
    }