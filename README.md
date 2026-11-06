# GPT Force v29 | Reversão exclusiva do landscape

## Ajuste realizado
- Removida a contrarrotação CSS introduzida na v28 para telas na horizontal
- Restaurada a lógica original de dimensões e posição do viewport da v27
- Removida a propriedade `orientation: portrait` do manifesto do PWA
- Ao girar o iPhone, o app passa a seguir o comportamento natural do navegador, como antes da v28

## Mantido sem alterações
- Correção do campo de digitação e reset da altura (v28)
- Indicador secreto com ponto final, separado do efeito da joaninha
- Editor compacto para ajustes do topo
- Editor de peek, opacidade, tamanho, posições e backups
- Todas as listas, força secreta, corretor nativo, estilos do topo e degradês

## Verificação
- O trecho CSS do cabeçalho e o degradê superior foram comparados literalmente com a v28, sem diferenças
- A função `resizeToViewport()` foi restaurada literalmente à v27
- Nenhum estilo ou comportamento das demais funcionalidades foi intencionalmente alterado
- Cache busting v29, com `version.json` atualizado por último
