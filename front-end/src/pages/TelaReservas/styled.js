import styled from 'styled-components';


export const StyledReservas = styled.div`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 15px;
            height: 50vh;
            width: 50vh;
          

            display: flex;
            align-items: center;
            justify-content: center;
            
           h1{
            position: relative;
            top: -60px;
            left: 40%;
            color: #ffffff;
           
           }
            h2{
                margin-bottom: 10px;
                font-size: 25px;
            }

            p{
                color:#ffffff;
                font-size: 15px;
                margin-top: 30px;
            }
`


export const StyledButton = styled.div`

            display:flex;
            
            justify-content: center;

            button{
                background-color: #2A2A2A;
                color: #ffffff;
                width: 100px;
                height: 40px;
                font-size: 15px;
                cursor: pointer;
                border-radius: 10px;
                margin-top: 10px;
                margin-left: 10px;
            }
            button:hover{
                border: 2px solid #FFF509;
            }

`
