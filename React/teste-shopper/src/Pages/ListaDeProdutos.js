import React, { useState } from "react";
import { BASE_URL } from "../Constants/baseUrl";
import { useRequestData } from "../Hooks/useRequestData";


export const ListaDeProdutos = () => {
    
    const [estoque] = useRequestData(`${BASE_URL}/estoque`);
    const est = !!estoque? estoque : "carregando";
    const [quantidade, setQuantidade] = useState();
    const [carrinho, setCarrinho] = useState([]);

    const listaEstoque = estoque && est.estoque.map((prod) => {
        return(<div>
                <p>{prod.name}</p>
                <p>{prod.price}</p>
                <input onChange={(e) => setQuantidade(e.target.value)} 
                placeholder="Quantidade:"/>
                <button onClick={() => removeCarrinho(prod.id)}>Retirar</button>
                <button onClick={() => addCarrinho(prod.id)}>Comprar</button>
            </div>
        )
    })

    const addCarrinho = (produtos) => {
        const index = carrinho.findIndex((produtoCarrinho) => {
          if (produtoCarrinho.id === produtos.id) {
            return true;
          } else {
            return false;
          }
        });
    
        if (index === -1) {
          alert("Adicionado ao carrinho!");
          const produtoComQuantidade = {
            ...produtos, quantity: quantidade, precoTotalItem: quantidade * produtos.price
          };
          const copiaCarrinho = [...carrinho, produtoComQuantidade];
          setCarrinho(copiaCarrinho);
          } else {
          const copiaCarrinho = carrinho.map((produtoCarrinho) => {
            if (produtoCarrinho.id === produtos.id) {
              return {
                ...produtoCarrinho, quantity: quantidade
              };
            } else {
              return produtoCarrinho
            }
          });
          setCarrinho(copiaCarrinho)
        }
      };
      
      const removeCarrinho = (produtos) => {
        const carrinhoAtualizado = carrinho.map((produtoCarrinho) => {
          if (produtoCarrinho.id === produtos.id) {
            return {
              ...produtoCarrinho, quantity: quantidade - quantidade, precoTotalItem: quantidade * produtos.price
            }
          }
          return produtoCarrinho;
        })
          .filter((produto) => produto.quantity > 0)
        setCarrinho(carrinhoAtualizado)
      };

      const ListaCarrinho = carrinho && carrinho.map((car) => {
        return(<div>
            <p>{car.name}</p>
            <p>{car.quantity}</p>
            {/* <p>{car.precoTotalItem}</p> */}
        </div>
        )
      })

    console.log(carrinho)
   

    return(
        <div>
            {listaEstoque}
            {ListaCarrinho}
        </div>
    )
}