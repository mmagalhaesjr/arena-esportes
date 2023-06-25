import Corpo from '../../components/Corpo/Corpo'
import { StyledContainer, StyledQuadra } from "./styled"
import { useState } from 'react'





export default function TelaQuadras() {
    const [quadras] = useState([
        {
            "id": 2,
            "id_tipo": 3,
            "descricao": "quadra de areia para futvolei, volei e beach tennis",
            "nome": "quadra de areia",
            "foto_principal": "https://condo.news/wp-content/uploads/2022/10/Quadra-beach-tenis-Geo-Home-136-scaled.jpg",
            "created_at": "2023-06-15T10:11:53.146Z"
        },
        {
            "id": 1,
            "id_tipo": 2,
            "descricao": "quadra de grama sintetica, coberta",
            "nome": "fut7",
            "foto_principal": "https://www.futgrass.com.br/images/society/grama-sintetica-dois-vizinhosg.jpg",
            "created_at": "2023-06-15T10:05:56.521Z"
        },
        {
            "id": 2,
            "id_tipo": 3,
            "descricao": "quadra de areia para futvolei, volei e beach tennis",
            "nome": "quadra de areia",
            "foto_principal": "https://condo.news/wp-content/uploads/2022/10/Quadra-beach-tenis-Geo-Home-136-scaled.jpg",
            "created_at": "2023-06-15T10:11:53.146Z"
        },

        {
            "id": 1,
            "id_tipo": 2,
            "descricao": "quadra de grama sintetica, coberta",
            "nome": "fut7",
            "foto_principal": "https://www.futgrass.com.br/images/society/grama-sintetica-dois-vizinhosg.jpg",
            "created_at": "2023-06-15T10:05:56.521Z"
        },
       
    
    ])
    return (
        <>
            <Corpo />

            <StyledContainer>
                {quadras.map(e =>
                    <StyledQuadra key={e.id} onclick={()=> alert(e.id)}> 
                        <div>
                            <img  className="logo" src={e.foto_principal} alt='logo' />
                            <a to="/reservar">{e.nome}</a>
                        </div>
                    </StyledQuadra>)}
            </StyledContainer>
        </>
    )
}