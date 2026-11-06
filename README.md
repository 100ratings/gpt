# GPT Force v30 | Janela do editor redimensionável

## O que mudou
- Removidos por completo o botão Compactar/Expandir e o modo de edição compacto
- A janela **Ajustar interface** agora tem dois sliders de uso direto:
  - Altura de 210 a 740 pixels, passos de 10 pixels
  - Largura de 260 a 450 pixels, passos de 10 pixels
- A janela é redimensionada imediatamente enquanto o usuário arrasta os sliders, sem afetar a interface que está sendo editada
- O tamanho escolhido é guardado junto com o restante das preferências ao tocar em **Salvar**
- Os valores de altura e largura também são incluídos nos backups exportados, mantendo compatibilidade com backups das versões anteriores
- No ajuste da seção **1 · Topo**, o painel permanece ancorado na parte inferior para deixar o cabeçalho visível, mas não é mais compactado ou tem ferramentas escondidas
- Com teclado aberto, a altura da janela é limitada automaticamente à região disponível, preservando a rolagem interna das opções
- Os botões de edição, seções e controles de Peek anteriores continuam presentes

## Integridade
- A comparação literal confirmou que o CSS do cabeçalho e o CSS do degradê superior são idênticos aos da v29
- O código secreto OP=23, o modo normal, o indicador discreto, o efeito da joaninha, o reconhecimento de listas e o texto do campo permanecem inalterados
- O comportamento anterior de orientação de tela restaurado na v29 permanece intacto

## Testes
- Playwright Chromium em 390 × 844: sliders alteram a janela de 540/450 para 270/300 pixels sem mover o topo nem o campo de mensagens
- Com a seção Topo selecionada, o painel fica embaixo e não encobre o cabeçalho
- Com viewport reduzido a 390 × 500, o painel continua dentro da área disponível
- Salvamento e reabertura do editor mantêm os novos tamanhos
- Backup v29 sem propriedades de tamanho é importado e assume os valores padrão
- OP=23 produz `Liste 50 animais` e Joaninha aparece na posição 23
- Nenhum erro de JavaScript observado nos testes automatizados
- Validação visual definitiva com Safari/PWA instalado no iPhone ainda depende do usuário

## Publicação
- Cache busting v30 aplicado no index e no manifesto
- `version.json` publicado apenas após todos os demais arquivos
