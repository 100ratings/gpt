# GPT Force v31 | Ajustar a seta com o teclado aberto

## Correção
- A seta para o final (↓) continua na seção **3 · Mensagens e resposta**
- Ao selecionar essa seta, agora aparecem dois botões próprios: **Teclado Fechado** e **Teclado Aberto**, sem precisar abrir o seletor nativo de modo enquanto o teclado está visível
- O botão **Aberto** coloca o foco diretamente no campo de mensagem e exibe o teclado virtual quando o iOS permite
- Os botões ↑ e ↓ preservam o foco no campo durante os toques, evitando que o teclado desapareça por uma mudança de foco
- Touchstart é interceptado somente nos botões de ajuste da seta e nos controles correspondentes, com o clique aplicado no touchend, sem interferir no input e nos controles normais
- O botão **Fechado** encerra o foco intencionalmente para editar a posição sem teclado
- Cada modo mantém seu próprio deslocamento vertical da seta, como já ocorria internamente na v30
- A seta continua com prévia selecionável mesmo quando não há longa lista gerada

## Preservação
- O seletor de teclado existente permanece na seção da barra inferior e não foi modificado
- O controle de tamanho da janela do editor, o peek, a importação/exportação de backups, a posição dos ícones e o restante da v30 foram preservados
- Cabeçalho e degradê superior foram comparados literalmente com a v30 e permanecem idênticos
- Force OP = 23, digitação normal, efeito da joaninha e reconhecimento das 12 listas continuam funcionando
- O comportamento de landscape não foi alterado

## Testes
- Playwright Chromium com viewport móvel e toques simulados: abrir o modo da seta, alternar Aberto/Fechado, pressionar repetidamente ↑ e ↓ sem perder foco e salvar posições diferentes
- Persistência das posições open/closed no localStorage preservada
- Regressão: lista normal e lista secreta OP=23, com Joaninha na posição 23
- Nenhum erro de JavaScript observado nos testes do Chromium
- **Safari/PWA real:** o comportamento físico do teclado deve ser confirmado no iPhone, porque Chromium não reproduz integralmente o gerenciamento do teclado pelo iOS

## Publicação
- Versionamento de cache v31 atualizado nos arquivos
- version.json publicado por último para disponibilizar a atualização manual do app
