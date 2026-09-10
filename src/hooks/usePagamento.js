function usePagamento() {

    function processarPagamento() {

        const pagamentoAprovado = Math.random() > 0.3

        return pagamentoAprovado
    }


    return {
        processarPagamento
    }
}

export default usePagamento

