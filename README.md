# GPT Force v19 | Degradê superior espelhado

Baseada diretamente na versão 18 aprovada no iPhone

## Atualização visual
- Degradê superior com os mesmos seis pontos de opacidade do degradê inferior, mas espelhado
- Degradê superior ancorado no cabeçalho, sem bloquear os botões e sem interferir na rolagem
- Controles independentes para altura e posição do degradê superior no editor por pressionamento prolongado do botão +
- Altura, posição e demais configurações do degradê inferior preservadas

## Cache Busting
- `version.json` contém o número da versão publicada e deve ser atualizado **por último**
- Ao abrir ou voltar ao app, uma verificação sem cache procura uma nova versão, sem recarregar durante o uso de uma lista ou a digitação
- Os parâmetros de versão dos recursos, manifesto, ícones e listas foram incrementados para 19
- Para atualizar uma instalação ainda na versão 18, pode ser necessário fazer uma atualização manual ou visitar `index.html?v=19` uma vez, pois a v18 ainda não tinha essa verificação

## Preservação
- Motor de force, corretor nativo, botão de voz, temporizador, lista de categorias e ajustes salvos preservados
- Testado em Chromium com entrada OP=23 e QQ=100, além de parâmetros independentes do editor
- Testar visualmente no Safari do iPhone
