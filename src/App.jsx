import { useState } from 'react'
import produtosIniciais from './data/produtos.js'
import './App.css'

function App() {

    const [listaProdutos] = useState(produtosIniciais)

    return (
        <div className="container">
            <h1>Loja Virtual</h1>
            <p>Melhores produtos, com melhores preços</p>


            <div className="produtos-grid">
                {listaProdutos.map((produto) => (
                    <div key={produto.id} className="produto-card">
                        {produto.imagem && (
                            <img src={produto.imagem} alt={produto.nome} />
                        )}

                        <h2>{produto.nome}</h2>
                        <p className="preco">R$ {produto.preco}</p>
                        {produto.descricao && <p>{produto.descricao}</p>}

                        <button>Adicionar ao carrinho</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App