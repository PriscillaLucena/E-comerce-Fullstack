import React, { useState } from "react";
import { FormsContainer, InputContainer } from "../Styles/FormStyled";

export const Formulario = () => {

    const [name, setName] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [compra, setCompra] = useState([])

    return (
        <FormsContainer>
            <h3>Pedidos:</h3>
            <InputContainer>
                <input onChange={(e) => setName(e.target.value)}
                    placeholder="Nome Completo" />
                <input onChange={(e) => setDeliveryDate(e.target.value)}
                    placeholder="Data de Entrega" />
                <button>Cadastrar</button>
            </InputContainer>
        </FormsContainer>
    )
}