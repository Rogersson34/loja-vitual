
import { useState } from 'react'
import Carrinho from './pages/Carrinho.jsx'
import produtosIniciais from './data/produtos.js'
import './App.css'

function App() {

    // Lista de produtos da loja
    const [listaProdutos] = useState(produtosIniciais)

    // Produtos que estão dentro do carrinho
    const [carrinho, setCarrinho] = useState([])


    // Adiciona um produto ao carrinho
    function adicionarAoCarrinho(produto) {

        // Verifica se o produto já está no carrinho
        const produtoJaExiste = carrinho.find(
            item => item.id === produto.id
        )


        // Se o produto já existe, aumenta a quantidade
        if (produtoJaExiste) {

            const novoCarrinho = carrinho.map(item => {

                if (item.id === produto.id) {

                    return {
                        ...item,
                        quantidade: item.quantidade + 1
                    }

                }

                return item

            })

            setCarrinho(novoCarrinho)

        } else {

            // Se o produto ainda não existe,
            // adicionamos ele com quantidade 1
            const novoProduto = {
                ...produto,
                quantidade: 1
            }

            setCarrinho([...carrinho, novoProduto])
        }

        alert(`Produto ${produto.nome} adicionado ao carrinho!`)
    }


    // Atualiza a quantidade de um produto
    function atualizarQuantidade(id, novaQuantidade) {

        // Se a quantidade chegar a zero,
        // removemos o produto
        if (novaQuantidade <= 0) {
            removerDoCarrinho(id)
            return
        }


        const novoCarrinho = carrinho.map(item => {

            if (item.id === id) {

                return {
                    ...item,
                    quantidade: novaQuantidade
                }

            }

            return item

        })

        setCarrinho(novoCarrinho)
    }


    // Remove um produto do carrinho
    function removerDoCarrinho(id) {

        const novoCarrinho = carrinho.filter(
            item => item.id !== id
        )

        setCarrinho(novoCarrinho)
    }


    // Soma a quantidade total de produtos
    const quantidadeTotal = carrinho.reduce(
        (total, item) => total + item.quantidade,
        0
    )


    return (
        <div className="container">

            <h1>Loja Virtual</h1>

            <p>
                Itens no carrinho: <strong>{quantidadeTotal}</strong>
            </p>


            {/* 
                Enviamos o carrinho e as funções
                para o componente Carrinho
            */}
            <Carrinho
                itens={carrinho}
                onRemover={removerDoCarrinho}
                onAtualizarQuantidade={atualizarQuantidade}
            />


            <div className="produtos-grid">

                {listaProdutos.map((produto) => (

                    <div
                        key={produto.id}
                        className="produto-card"
                    >

                        {produto.imagem && (
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                            />
                        )}


                        <h2>{produto.nome}</h2>


                        <p className="preco">
                            R$ {produto.preco.toFixed(2)}
                        </p>


                        {produto.descricao && (
                            <p>{produto.descricao}</p>
                        )}


                        <button
                            onClick={() =>
                                adicionarAoCarrinho(produto)
                            }
                        >
                            Adicionar ao carrinho
                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default App

