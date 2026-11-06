# GPT Force v25 | Extensão inferior isolada, topo intocável

## Correção
- A conversa tenta ocupar o espaço extra disponível abaixo do VisualViewport do Safari/PWA instalado
- Somente a altura da região que contém a lista é estendida para baixo, conforme a área segura ou a diferença de viewport fornecida pelo iOS
- A posição real do campo de entrada é compensada, de forma a não deslocar o campo nem o aviso inferior
- Quando o teclado virtual está aberto, a extensão extra é desativada
- **Nenhum estilo do cabeçalho ou degradê superior foi alterado**

## Preservação
- Código secreto, corretor nativo, temporizador de revelação, listas, editor, histórico e atualização manual mantidos
- Mesma máscara de transparência e opacidade da v24
- Versão de cache incrementada para v25

## Limitação natural
- Se o iOS não disponibilizar nenhum pixel adicional, não existe área extra para desenhar
- Se não houver mais itens na lista, não há conteúdo abaixo do último item para aparecer no espaço vazio

## Testes
- Playwright Chromium com 100 itens: OP=23 e Joaninha na posição correta
- Comparação com v24: cabeçalho, menu, título, degradê superior, campo e rodapé mantiveram as coordenadas
- Simulação de 34 px extras na base: scroller aumentou 34 px, sem mover topo nem campo
- Estado de teclado aberto: extensão desativada
- Safari/PWA físico no iPhone ainda necessita validação
