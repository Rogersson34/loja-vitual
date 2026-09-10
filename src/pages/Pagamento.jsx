import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import usePagamento from '../hooks/usePagamento.js'
import validarCartao from '../utils/pagamento.js'

function Pagamento() {
    const navigate = useNavigate()
    const location = useLocation()

    const { processarPagamento, carregando } = usePagamento()
    const total = location.state?.total || 0

    const [formaPagamento, setFormaPagamento] = useState('')
    const [erro, setErro] = useState('')

    const [cartao, setCartao] = useState({
        titular: '',
        numero: '',
        validade: '',
        cvv: ''
    })

    function preencherCartao(event) {
        const { name, value } = event.target

        setCartao({
            ...cartao,
            [name]: value
        })
    }

    async function finalizarPagamento(event) {
        event.preventDefault()
        setErro('')

        if (!formaPagamento) {
            setErro('Escolha uma forma de pagamento.')
            return
        }

        if (formaPagamento === 'Cartão de Crédito') {
            const mensagemErro = validarCartao(
                cartao.titular,
                cartao.numero,
                cartao.validade,
                cartao.cvv
            )

            if (mensagemErro) {
                setErro(mensagemErro)
                return
            }
        }

        const aprovado = await processarPagamento(
            formaPagamento,
            cartao.numero
        )

        navigate(aprovado ? '/sucesso' : '/falha')
    }

    const formasPagamento = [
        'Pix',
        'Cartão de Crédito',
        'Boleto'
    ]

    return (
        <div className="pagina-pagamento">
            <h1>💳 Pagamento</h1>

            <p>
                Total da compra:
                <strong> R$ {total.toFixed(2)}</strong>
            </p>

            <form onSubmit={finalizarPagamento}>
                <h2>Escolha a forma de pagamento</h2>

                {formasPagamento.map((forma) => (
                    <label key={forma}>
                        <input
                            type="radio"
                            value={forma}
                            checked={formaPagamento === forma}
                            onChange={(event) =>
                                setFormaPagamento(event.target.value)
                            }
                        />

                        {forma}
                    </label>
                ))}

                {formaPagamento === 'Cartão de Crédito' && (
                    <div className="dados-cartao">
                        <h2>Dados do cartão</h2>

                        <input
                            name="titular"
                            placeholder="Nome do titular"
                            value={cartao.titular}
                            onChange={preencherCartao}
                        />

                        <input
                            name="numero"
                            placeholder="1234 5678 1234 5678"
                            value={cartao.numero}
                            onChange={preencherCartao}
                        />

                        <input
                            name="validade"
                            placeholder="MM/AA"
                            value={cartao.validade}
                            onChange={preencherCartao}
                        />

                        <input
                            name="cvv"
                            placeholder="CVV"
                            value={cartao.cvv}
                            onChange={preencherCartao}
                        />
                    </div>
                )}

                {erro && (
                    <p className="mensagem-erro">
                        {erro}
                    </p>
                )}

                <button type="submit" disabled={carregando}>
                    {carregando
                        ? 'Processando compra…'
                        : 'Finalizar pagamento'
                    }
                </button>
            </form>
        </div>
    )
}

export default Pagamento;
