# GPT Force v28 | Campo corrigido, indicador discreto e editor compacto

## Campo de mensagem
- O textarea é sempre um único parágrafo: Return e Shift+Return não criam linhas manuais
- Entradas de teclado virtual e quebras coladas/dictadas são normalizadas para espaços
- Frases compridas ainda quebram naturalmente conforme a largura do campo
- Ao apagar tudo, enviar uma pergunta ou abrir uma nova conversa, a altura é restaurada para 32 px imediatamente
- A confirmação do corretor nativo do iOS e os dois modos de entrada continuam preservados

## Indicação secreta e efeito da joaninha
- Texto normal: `Perguntar ao ChatGPT`
- Modo secreto ativado: `Perguntar ao ChatGPT.`
- A ativação continua restrita ao espaço vazio à direita do placeholder
- O ponto do efeito de ocultação da joaninha continua funcionando separadamente, com timer de 5 segundos
- O código OP=23 e o retorno ao modo normal após cada envio foram preservados

## Editor visual
- Botão Compactar/Expandir no topo do painel de ajuste
- Ao escolher `1 · Topo`, o painel é automaticamente compactado e fixado na parte inferior visível, para não cobrir o título e os botões superiores
- A versão compacta conserva o seletor de propriedade e as setas de ajuste
- Toque em Expandir para mudar de seção ou acessar backups e outras propriedades
- Com teclado aberto, o painel acompanha a altura útil da tela
- Nenhuma propriedade do cabeçalho, nenhuma coordenada do topo e nenhum valor previamente salvo foram alterados

## Orientação vertical
- O manifesto PWA solicita `orientation: portrait`
- Em navegadores móveis que ignoram essa preferência, CSS contrapõe visualmente a orientação horizontal para preservar o layout vertical
- O Safari do iPhone não garante bloqueio físico da orientação por PWA, portanto essa é uma proteção visual sujeita a teste no aparelho real
- Nenhum estilo vertical existente foi alterado

## Testes de regressão
- Chromium móvel 390 × 844 e viewport reduzido a 390 × 500: editor não cobre o topo
- Textarea longo expande automaticamente e retorna a 32 px ao esvaziar, enviar ou abrir conversa
- Enter e Shift+Enter impedem nova linha
- Force `OP=23` produz `Liste 50 animais` e coloca Joaninha na posição 23
- Após envio, modo normal é restaurado
- Ponto da revelação da joaninha ativado sem conflito; emoji ocultado após o temporizador
- Orientação horizontal móvel 844 × 390: o aplicativo permanece com proporções internas verticais por transformação CSS
- Cabeçalho, título, menu, botão de nova conversa, conversa e campo: mesmas coordenadas que na v27 em portrait
- Sem erros JavaScript no Chromium; Safari/PWA físico ainda precisa ser testado

## Publicação
- Index, manifesto e recursos receberam cache busting v28
- A atualização manual permanece no primeiro item das conversas recentes
- `version.json` é publicado por último
