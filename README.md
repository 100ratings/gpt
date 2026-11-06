# GPT Force v37 | Setinha do título como indicador do truque

## Novo indicador e temporização
- A pequena setinha à direita de **ChatGPT**, no cabeçalho, é o novo sinal exclusivo da revelação da joaninha
- **0s:** ao tocar na região do microfone/voz, a setinha fica invisível imediatamente
- **5s:** a setinha reaparece no mesmo lugar, sem deslocar o título ou alterar a área clicável
- **5s a 6s:** a joaninha continua inteiramente visível durante um segundo de espera
- **6s a 7s:** o emoji perde opacidade suavemente, indo de 100% a 0% em um segundo
- **7s:** a joaninha fica invisível, preservando seu espaço na lista
- A numeração da lista e seus pontos permanecem visíveis e intactos durante todo o efeito
- Ao cancelar ou iniciar nova conversa, a setinha reaparece e os temporizadores/efeitos são cancelados

## Preservação das funcionalidades
- O título ChatGPT, o menu, os demais botões e todas as medidas do cabeçalho permanecem iguais à v36
- Apenas a visibilidade do SVG da setinha é alterada enquanto a contagem estiver ativa
- O ponto no placeholder `Perguntar ao ChatGPT.` continua reservado somente ao modo secreto
- Todas as listas, posicionamento secreto, corretor nativo, peek de 3s e os ajustes do editor continuam preservados
- A numeração explícita e estável da v36 foi mantida, sem ocultar qualquer ponto
- O degradê superior e inferior e as preferências salvas permanecem sem alterações

## Testes realizados
- Playwright Chromium em tela móvel 390 × 844: entrada secreta OP=23, Joaninha na posição 23 em uma lista de 50 animais
- Setinha invisível durante 5 segundos, reaparece em aproximadamente 5s, emoji mantém opacidade 100% até os 6s
- A opacidade do emoji foi medida em ~48% aos 6,5s e 0% após 7s
- Coordenadas da setinha, título e número da lista comparadas antes/depois: idênticas
- Sem erros JavaScript, e a abertura de nova conversa restaura o indicador
- A validação física final no Safari/PWA do iPhone ainda depende do teste do usuário

## Publicação
- Código versionado como v37, com parâmetros de cache atualizados
- `version.json` publicado por último, liberando a atualização pelo primeiro item do menu lateral
