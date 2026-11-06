# GPT Force v22 | Transparência real no topo e na base

## Ajuste visual
- Fundo do cabeçalho e a área ao redor do campo de mensagem agora transparentes, sem faixa preta sólida
- Conteúdo da conversa se estende e rola por trás do cabeçalho, incluindo a faixa da barra de status
- Gradiente de transparência do conteúdo preserva a legibilidade dos botões e da legenda inferior
- Degradês existentes permanecem com a mesma curva e continuam ajustáveis no editor
- A primeira pergunta mantém o afastamento adequado do cabeçalho antes de iniciar a rolagem

## Compatibilidade
- Código secreto, corretor nativo, toque no microfone/voz, temporizador, listas e editor não alterados
- Mantido o intervalo de “Pensando” que estava publicado no repositório (2,5 segundos)
- Cache Busting de recursos e versão incrementados para v22
- Atualização manual pelo primeiro item de conversas recentes, como na v21

## Verificações
- Playwright Chromium emulado 428×926: campos transparentes, área real de rolagem sobreposta ao cabeçalho, 100 itens e force OP = 23
- Menu, nova conversa e corretor mantidos
- Safari/PWA no iPhone ainda precisa de validação física
