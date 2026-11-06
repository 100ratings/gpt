# GPT Force v26 | Dois modos e interpretação flexível de listas

## Interação no campo de mensagem
- Modo normal é o padrão, digita qualquer texto sem o código Li
- Toque no espaço vazio à direita do placeholder, dentro do campo cinza, para ativar o modo secreto
- Indicador visual discreto: `Perguntar ao ChatGPT` passa a `Pergunte ao ChatGPT`
- Tocar sobre as palavras do placeholder não ativa o modo secreto
- Ao enviar a mensagem, o modo secreto é desativado, inclusive quando a resposta falha
- No modo secreto, os primeiros dois caracteres continuam codificando a posição (exemplo: OP = 23)
- Microfone/voz e efeito de ocultar emoji em cinco segundos preservados

## Como o aplicativo interpreta pedidos
- Reconhece pedidos naturais de listas, como `Me diga 20 pessoas famosas`, `Liste filmes`, `Quais e quantas são as cores das auras?`
- Rejeita palavras isoladas sem intenção de listagem (`espírito`) e perguntas explicativas (`Por que os insetos voam?`)
- As 12 categorias reconhecem variantes de nomes, sinônimos e diferenças de acentuação, desde que o pedido indique uma lista
- Se duas categorias genéricas aparecem na mesma frase, prioriza a primeira categoria mencionada
- O contato espiritual prevalece sobre `perguntas` quando há indicação de espírito, espiritual ou contato ligado a perguntas
- `contato` isolado não identifica a lista espiritual
- Lista genérica sem número usa o comprimento real do arquivo, com número usa a quantidade especificada

## Listas especiais
- Aura sempre gera os 31 itens
- Familiares zoológicos sempre gera os 31 itens, preservando Panda forçado e Raposa na posição especial
- Contato espiritual sempre gera 18 perguntas, mesmo quando o usuário pede 14 ou 60
- No modo secreto, se a posição for maior que o tamanho gerado, retorna a mensagem de erro existente
- No modo normal, retorna os itens na ordem original do TXT, sem força nem ocultação de emoji
- Cabeçalhos de resposta usam modelos contextualizados, como `Aqui estão as 18 perguntas para falar com espírito:`

## Arquivos e interface
- `listas/perguntascontatoespiritual.txt` renomeado para `listas/contatoespiritual.txt`, mesmos 18 itens
- `listas/perguntas.txt` mantém os 100 itens, iguais ao arquivo enviado pelo usuário
- Removido completamente o aviso `O ChatGPT pode cometer erros. Confira informações importantes`, sem deixar altura reservada
- Confirmação numérica temporária do código continua posicionada como sobreposição, sem ocupar espaço de rodapé
- Todo o cabeçalho, o degradê superior e os estilos associados foram verificados sem mudanças em relação à v25
- Editor, backups, opacidade, transparência inferior, rolagem e cache busting preservados

## Testes realizados
- Playwright Chromium em viewport móvel: digitação normal e secreta, OP=23, modo automático de retorno, mensagens repetidas, quantidade variável, quantidade especial, erro por posição inválida, ausência do aviso e comportamento com perguntas fora do catálogo
- Os 12 arquivos locais foram usados como base para a validação, com 100 itens nas listas comuns, 31 em Aura/Familiares e 18 em Contato Espiritual
- A validação final da interação por toque no Safari/PWA físico do iPhone depende da observação do usuário
