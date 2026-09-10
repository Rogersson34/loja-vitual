import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Pagamento() {

    const [formaPagamento, setFormaPagamento] = useState('')

    const location = useLocation()

    const total = location.state?.total || 0
    function finalizarPagamento(event) {

        event.preventDefault()

        if (formaPagamento === '') {
            alert('Escolha uma forma de pagamento.')
            return
        }

        alert(
            `Pagamento de R$ ${total.toFixed(2)} realizado com ${formaPagamento}!`
        )
    }


    return (
        <div className="pagina-pagamento">

            <h1>Pagamento</h1>

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


                <button type="submit">
                    Finalizar Pagamento
                </button>

            </form>

        </div>
    )
}

export default Pagamento

