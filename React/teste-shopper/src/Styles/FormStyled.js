import styled from "styled-components"

export const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    align-items: center;
    border: solid 1px;
    border-radius: 20px;
    background-color: #CAE1FF;
    font-size: 1.2rem;
    font-family: 'Josefin Sans', sans-serif;
`

export const InputContainer = styled.span`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vw;
    row-gap: 1vw;
    input{
        border: solid 1px gray;
        border-radius: 5px;
        height: 4vh;
    }
    button{
        border:solid 1px #00688B;
        border-radius: 5px;
        color: white;
        background-color: #00688B;
    }
`

