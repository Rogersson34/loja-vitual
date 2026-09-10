import { useState } from 'react'

function usePagamento() {
    const [carregando, setCarregando] = useState(false)

    const [erro, setErro] = useState(null)
    async function processarPagamento() {
        setCarregando(true)

        setErro(null)

        await new Promise((resolve) => { setTimeout(resolve, 2000) })

        const pagamentoAprovado = Math.random() > 0.3

        setCarregando(false)

        return pagamentoAprovado
    }


    return {
        processarPagamento,
        carregando,
        erro
    }
}

export default usePagamento

