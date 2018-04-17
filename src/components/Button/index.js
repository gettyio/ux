import styled, { css } from 'styled-components'

const Button = styled.TouchableOpacity`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: red;
  align-self: flex-start;
  ${props => props.full && css`
    align-self: stretch;
  `}
`

export default Button
