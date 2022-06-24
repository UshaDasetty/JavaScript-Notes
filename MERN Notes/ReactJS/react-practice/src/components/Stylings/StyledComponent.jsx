import React from 'react'
import styled from 'styled-components'

const StyledComponent = () => {
  return (
    <>
        <Text>Adding Styles Using Styled-Component</Text>
    </>
  )
}

const Text = styled.p`
    font-size: 30px;
    font-family: 'Helvetica';
    font-weight: normal;
    font-style: italic;
    color: #643224
 `

export default StyledComponent