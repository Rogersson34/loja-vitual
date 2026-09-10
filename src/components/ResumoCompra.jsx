function ResumoCompra({ itens }) {

    const quantidadeTotal = itens.reduce(
        (total, item) => total + item.quantidade,
        0
    )

    const valorTotal = itens.reduce(
        (total, item) => {
            return total + (item.preco * item.quantidade)
        },
        0
    )


    return (
        <div className="resumo-compra">

            <h2>Resumo da Compra</h2>

            <p>
                Quantidade de produtos:
                <strong> {quantidadeTotal}</strong>
            </p>

            <p>
                Total:
                <strong> R$ {valorTotal.toFixed(2)}</strong>
            </p>

        </div>
    )
}

export default ResumoCompra

