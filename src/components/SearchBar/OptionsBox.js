import React from 'react'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  width: 149px;
  font-family: Roboto;
  font-size: 7px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.05px;
  color: #6b778c;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  display: flex;
  margin-top: 30px;
  padding: 0;
`;

function Options(props){

// Use Title and Wrapper like any other React component – except they're styled!
return(
  
  <Wrapper>
    <Title>
      <p>{props.result}</p>
    </Title>
  </Wrapper>
);
}

export default Options