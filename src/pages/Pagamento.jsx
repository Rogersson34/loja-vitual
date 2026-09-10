import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import usePagamento from '../hooks/usePagamento.js'

function Pagamento() {

    const [formaPagamento, setFormaPagamento] = useState('')

    const location = useLocation()

    const navigate = useNavigate()

    const { processarPagamento,
        carregando
    } = usePagamento()

    const total = location.state?.total || 0
    async function finalizarPagamento(event) {

        event.preventDefault()

        if (formaPagamento === '') {
            alert('Escolha uma forma de pagamento.')
            return
        }

        const pagamentoAprovado = await processarPagamento()

        if (pagamentoAprovado) {
            navigate('/sucesso', {
                state: {
                    total: total,
                    formaPagamento: formaPagamento
                }
            })

        } else {
            navigate('/falha', {
                state: {
                    total: total
                }
            })
        }
    }


    return (
        <div className="pagina-pagamento">

            <h1>💳Pagamento</h1>

            <p>
                Total da compra:
                <strong> R$ {total.toFixed(2)}</strong>
            </p>


            <form onSubmit={finalizarPagamento}>

                <h2>Escolha a forma de pagamento</h2>


                <label>
                    <input
                        type="radio"
                        name="pagamento"
                        value="Pix"
                        checked={formaPagamento === 'Pix'}
                        onChange={(event) =>
                            setFormaPagamento(event.target.value)
                        }
                    />

                    Pix
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="pagamento"
                        value="Cartão de Crédito"
                        checked={formaPagamento === 'Cartão de Crédito'}
                        onChange={(event) =>
                            setFormaPagamento(event.target.value)
                        }
                    />

                    Cartão de Crédito
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="pagamento"
                        value="Boleto"
                        checked={formaPagamento === 'Boleto'}
                        onChange={(event) =>
                            setFormaPagamento(event.target.value)
                        }
                    />

                    Boleto
                </label>
                <br />
                <br />

                <button
                    type="submit"
                    disabled={carregando}
                >
                    {carregando
                        ? 'Processando pagamento...'
                        : 'Finalizar Pagamento'

                    }

                </button>

            </form>

        </div>

    )
}

export default Pagamento

