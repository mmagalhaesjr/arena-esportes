import styled from 'styled-components';

export const StyledHorarios = styled.div`
 display:flex;
 flex-wrap: wrap;
 align-items: center;
 width: 650px;
 height: 300px;
 
`

export const StyledHora = styled.div`
width: 200px;
height: 40px;

display:flex;
align-items: center;
justify-content: center;

margin-left: 5px;

border: 1px solid #000000;
border-radius: 5px;
background-color: #2A2A2A;
color:#ffffff;


&:hover{
    border: 2px solid #FFF509;
   transition:200ms;
}
`