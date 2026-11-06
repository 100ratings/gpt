# GPT Force v21 | Conversas recentes e atualização discreta

## Menu lateral
- Histórico visual com 10 títulos de conversas plausíveis, sem a antiga entrada “Lista de 100 animais”
- As entradas são visuais e não constituem um histórico de conversas recuperável
- Ao abrir o menu, o app consulta `version.json` com `cache: 'no-store'` e parâmetro de tempo
- Quando o número publicado é maior que a versão em execução, **apenas** a primeira conversa recente muda para **“Deseja atualizar o app”**
- Tocar nessa entrada busca o novo `index.html` sem cache e confere se o JavaScript já contém a versão publicada, evitando atualização prematura por propagação do GitHub Pages
- Se a versão publicada ainda não estiver disponível, o app exibe uma mensagem e permanece na tela atual
- Sem atualização, a primeira conversa volta a aparecer normalmente

## Segurança da apresentação
- Nenhum redirecionamento automático ao iniciar conversa, reabrir aplicativo ou abrir menu
- Verificação também funciona com resposta na tela, mas não interrompe a apresentação
- Force, corretor nativo, gesto de 5 segundos, listas, degradês e editor de backup não alterados

## Cache Busting
- Links do manifesto, ícones e listas versionados para v21
- `version.json` atualizado por último, após todos os arquivos do projeto
- Na passagem da versão 20 para 21, instalações antigas podem precisar abrir a nova versão uma vez pelo Safari, pois a v20 ainda seguia outra regra de atualização

## Testes
- Playwright Chromium emulado 428×926: 10 títulos, detecção simulada da v22, nenhuma atualização espontânea, toque intencional para atualizar, prevenção contra HTML antigo e force OP=23
- Validar o comportamento de Safari/PWA no iPhone real
