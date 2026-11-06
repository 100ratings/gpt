# GPT Force v35 | Ajustes com limites ampliados e valores exatos

## Limites de ajustes
- Deslocamento vertical dos elementos e posição horizontal dos cinco botões: **−200 a +200 px**
- Espaçamento dos itens e entre botões: **−200 a +200 px**
- Posição dos degradês superior e inferior: **−200 a +200 px**
- Altura dos degradês: **0 a 500 px**, porque altura negativa não é válida em CSS
- Tamanho do texto da conversa: **8 a 60 px**
- Tamanho de cada ícone dos botões da resposta: **8 a 80 px**
- Tamanho do peek: **8 a 60 px**
- Posição X/Y do peek: seus limites anteriores, superiores a ±200 px, permanecem preservados
- Opacidades: **0 a 100%**
- Janela do editor: limites anteriores de altura/largura compatíveis com a tela do iPhone

## Entrada numérica direta
- Ao selecionar um ajuste comum, o editor mostra um campo **Valor exato**, com mínimo e máximo correspondentes à propriedade
- O campo permite digitar valores positivos, zero ou negativos quando aplicáveis, como `-20` na posição do degradê inferior
- Os botões ↑ e ↓ continuam movendo em passos de 1 px ou 1 ponto percentual
- Para os cinco botões da resposta, existe agora um campo X separado para o deslocamento horizontal, mantendo a entrada de Y
- O peek conserva seus campos próprios X, Y, tamanho e opacidade
- A altura e a largura da janela do editor agora também podem ser digitadas, além dos controles deslizantes
- Valores fora dos limites são rejeitados sem substituir o valor salvo

## Segurança e compatibilidade
- A chave do localStorage permanece `gpt-force-layout-v4`, portanto configurações existentes são preservadas
- A exportação/importação JSON continua com o mesmo formato, aceitando backups anteriores e novos valores válidos
- Nenhum valor salvo é alterado apenas por atualizar o aplicativo
- CSS do cabeçalho e do degradê superior comparados literalmente com a v34, sem alterações
- O comportamento de rotação restaurado na v29 e as melhorias posteriores continuam preservados
- Código secreto, corretor nativo, `OP = 23`, temporizador do peek, sinal do ponto e efeito de desaparecimento do emoji preservados

## Testes realizados
- Sintaxe JavaScript validada pelo Node.js
- Chromium móvel: limites de altura/posição do degradê, fonte, espaçamento, tamanho dos botões, deslocamento horizontal, opacidade e entrada numérica
- Salvamento em localStorage, ajustes do tamanho da janela e rejeição de valores fora do intervalo
- Uma solicitação normal de lista continuou funcionando
- Sem erros de JavaScript nos testes automatizados
- O comportamento físico dos controles numéricos no Safari/PWA do iPhone ainda exige validação pelo usuário

## Publicação
- HTML e manifesto com parâmetros de cache v35
- Atualização manual do menu habilitada após publicar os outros arquivos por meio de `version.json`
