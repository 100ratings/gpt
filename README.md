# GPT Force v32 | Peek de 3 segundos e sinal na pontuação da lista

## Novo comportamento da revelação
- O toque na região de microfone/voz continua sendo o único gatilho para desaparecer o emoji do item forçado
- Na hora do toque, somente o ponto após o número do item forçado desaparece, por exemplo `23 Joaninha 🐞`
- Durante os cinco primeiros segundos, o item conserva o número, a joaninha e a posição na lista
- Exatamente após 5 segundos, o ponto reaparece, ficando `23. Joaninha 🐞`
- Durante o sexto segundo, o emoji passa gradualmente de 100% a 0% de opacidade
- Ao final dos 6 segundos, o emoji fica invisível mantendo o espaço original, evitando deslocamentos de texto
- A pontuação dos outros itens não muda, e a contagem só funciona quando há um emoji forçado válido
- Abrir uma nova conversa ou cancelar a resposta interrompe os temporizadores, restaura o ponto e impede efeitos atrasados

## Indicador secreto e peek
- `Perguntar ao ChatGPT` permanece o texto normal
- `Perguntar ao ChatGPT.` agora indica **apenas** a ativação do modo secreto, não o efeito da joaninha
- O número do peek permanece visível por **3 segundos** em vez de 2 segundos
- Nenhuma alteração na cor, opacidade, tamanho ou posição do peek

## Integridade
- Código secreto, corretor nativo, listas, reconhecimento por sinônimos e modos normal/secreto preservados
- Editor, ajustes da seta com teclado aberto, backups, cache busting e outros controles preservados
- CSS do cabeçalho e do degradê superior comparados literalmente com a v31, sem alterações
- Alterações concentradas no marcador de um único item, opacidade do emoji, temporizadores e indicador do campo
- Comportamento de landscape permanece como na v31

## Testes
- Chromium móvel com entrada secreta OP = 23 e lista de 50 animais: Joaninha aparece na posição 23
- Peek visível por 3 segundos e ocultado após o tempo configurado
- Inspeção de ::marker confirma ponto oculto durante a primeira fase e restaurado após 5 segundos
- No sexto segundo, a opacidade do emoji foi medida entre 0 e 1 antes de chegar a zero
- Cancelamento por nova conversa validado sem efeitos atrasados
- Nenhuma alteração na coordenada Y do item durante a revelação
- Nenhum erro de JavaScript durante os testes automatizados
- A execução real no Safari/PWA do iPhone ainda exige verificação visual

## Atualização
- Arquivos e manifesto possuem cache busting v32
- `version.json` é publicado por último, ativando a opção de atualização manual no menu
