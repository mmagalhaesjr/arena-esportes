import styled from 'styled-components';


export const StyledContainer = styled.div`
position: absolute;
top: 17%;
height: 100%;
width: 100%;

display: flex;
align-items:center;
justify-content:space-evenly;


section{
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    width: 300px;
    height: 300px;
}
          
div{
    height: 90%;
    width: 95%;
    background-color: #ffffff;
    border-radius: 15px;

    display:flex ;
    flex-direction: column;
    align-items:center;
}
div:hover{
    background-color: rgba(0, 0, 0, 0.6);
}


img{
    height: 100%;
    width: 100%;
}
p{
    margin-top:7px;
    font-size: 20px;
    color: #ffffff;
}

`