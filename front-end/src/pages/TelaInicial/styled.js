import styled from 'styled-components';

export const StyledLogo = styled.section`

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

img{
    width: 100%;
}

button{    
    background-color: #2A2A2A;
    width:35%;
    border: none;
    padding: 15px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 10px;

    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;

}
button:hover{
    border: 3px solid #FFF509;
}
`


