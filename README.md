# GPT Force v36 | Sinal do ponto sem deslocamento e fade cronometrado

## Por que o sinal anterior falhava
- A v35 alternava entre o marcador nativo do `<ol>` e um pseudo-elemento CSS apenas no item forçado
- No Safari, esses dois marcadores podem ter geometrias diferentes, deslocando o número para a direita quando o ponto desaparece

## Solução
- **Todos os números da lista** agora utilizam um mesmo marcador visual estável, com o número e o ponto em dois elementos distintos
- Ao ativar o efeito na região do microfone/voz, somente a visibilidade do ponto do item forçado muda, sem alterar a largura, posição ou alinhamento do número
- O ponto fica invisível do instante inicial até completar 5 segundos
- **Exatamente após 5 segundos**, o ponto reaparece, enquanto o emoji ainda está visível
- Durante **o sexto segundo completo**, o emoji perde opacidade gradualmente de 100% a 0%, por uma animação Web Animations de 1000 ms com fallback CSS
- Quando o temporizador chega a 6 segundos, o emoji permanece invisível, mas conserva a largura original no texto
- Nova conversa cancela os temporizadores e a animação
- Os demais itens mantêm seus pontos e alinhamento durante toda a apresentação
- Numeração de 1 a 100 conferida, inclusive o item 100 em viewport estreito

## Não alterado
- O topo e o degradê superior, comparados literalmente com a v35
- O degradê inferior e todos os ajustes salvos
- Código secreto `OP = 23`, corretor nativo iOS, os dois modos de entrada, peek de 3 segundos
- Editor, controles numéricos da v35, histórico, backups e comportamento original de orientação
- Todos os arquivos de listas e a ordem das respostas

## Testes
- Playwright Chromium em tela móvel, com `OP = 23` e 50 animais: o ponto do item 23 some imediatamente e **número, texto e marcador mantêm exatamente as mesmas coordenadas**
- Ponto reaparece após 5 segundos
- Opacidade medida durante o sexto segundo: valor intermediário aproximado de 30% no meio do fade, valor 0 ao fim
- Verificados os 50 números; marcadores de três dígitos com até 100 itens não ultrapassam a borda em larguras de 320, 390 e 428 pixels
- Sem erros JavaScript no Chromium
- **É necessário confirmar o comportamento final no Safari/PWA do iPhone**, cujo renderizador não está disponível neste ambiente

## Publicação
- Código e cache busting v36
- Atualização manual pelo menu liberada após a atualização do `version.json`
