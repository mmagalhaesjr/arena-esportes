import Calendar from "react-calendar"
import { styled } from "styled-components"

export const Container = styled.div`
display:flex;
 flex-wrap: wrap;
 align-items: center;
 width: 700px;
 height: 300px;
 background-color: red;
  
`

export const StyledCalendario = styled(Calendar)`
  width: 40%;
  height: 50%;
  margin-top: 12px;
  border: none;
  border-radius: 10px;
`
