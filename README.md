# Loja Virtual

Esse projeto consite em criar uma Loja Virtual, com aplicação React e Java Script, que simula um site de compras (E-commerce), nele temos nossos produtos com fotos e valores e o botão de adicionar ao carrinho, onde nos leva ao Resumo da Compra, listando nossos produtos, com os valores e a quantidade, podendo aumentar diminuir ou excluir. 
Ao finalizar a compra nossa página nos leva para a forma de pagamento, entre elas temos a opção de PIX, BOLETO e CARTÃO DE CRÉDITO, onde validamos as informações e nosso sistema identifica a forma de pagamento, podendo ser APROVADA ou RECUSADA!

Abaixo temos a nossa estrutura do projeto;

├── package.json — dependências e scripts do Vite 
├── vite.config.js — configuração do Vite 
├── README.md — documentação e instruções de execução 
├── src/
├── main.jsx — ponto de entrada da aplicação 
├── App.jsx — configuração das quatro rotas 
├── pages/
│
├── Carrinho.jsx — produtos, subtotais e total da compra 
│
├── Pagamento.jsx — formulário com React Hook Form e Zod 
│
├── Sucesso.jsx — confirmação da compra 
│
└── Falha.jsx — mensagem "tentativa de golpe" 
├── components/
│
├── ItemCarrinho.jsx — exibição de um produto via props 
│
└── ResumoCompra.jsx — resumo dos valores da compra 
├── hooks/
│
└── usePagamento.js — estado e processamento da compra simulada 
├── utils/
│
└── pagamento.js — regra que identifica dígitos todos iguais 
├── data/
│
└── produtos.js — array fixo de produtos 
└── assets/
├── styles/
│
└── index.css — estilos e responsividade 
└── img/
└── logo.svg — identidade visual da loja



Link do video: https://docs.google.com/videos/d/1wZe1DIbnC2ZtJWB-a0tVEBl1jOc1napYE4JIs39NxkE/edit?scene=id.g70e19073_0_0#scene=id.g70e19073_0_0

Link do GitHub: https://github.com/Rogersson34/loja-vitual
