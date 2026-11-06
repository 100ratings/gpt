# GPT Force v34 | Bloqueio do menu Colar/Preenchimento Automático no campo vazio

## Ajuste no iPhone
- Quando o campo de digitação já está focado, com o cursor piscando e ainda sem texto, o segundo toque não deve abrir o menu contextual de edição do iOS
- Aplicados `-webkit-touch-callout:none`, bloqueio de `contextmenu` e cancelamento do gesto nativo apenas quando o textarea está vazio e já focado
- O primeiro toque continua focando o campo normalmente
- O toque no espaço vazio à direita continua podendo ativar o modo secreto
- O campo preenchido preserva os toques para reposicionar o cursor e editar texto
- Autocorreção nativa, input normal e `Li` do force foram preservados
- A supressão total de menus controlados pelo sistema não pode ser garantida sem confirmação em Safari/PWA físico

## Preservações
- Revelação da joaninha, sinal no marcador, temporizador de 6 segundos e fade inferior idênticos à v33
- Peek de 3 segundos, modos normal/secreto, editor, backups, listas e landscape mantidos
- Cabeçalho e degradê superior confirmados literalmente iguais aos da v33

## Verificação
- Sintaxe JavaScript aprovada com Node
- Teste de toque em Chromium com emulação móvel confirmou que o segundo toque no campo vazio focado é cancelado, sem perder o foco
- O gatilho secreto `OP` ainda mostra `Li` e o indicador do modo secreto continua funcionando
- Toques sobre campo preenchido seguem nativos, sem prevenção do gesto
- Nenhum erro JavaScript no teste automatizado
- Safari/PWA iPhone real requer avaliação do resultado do menu contextual

## Atualização
- Cache Busting atualizado para v34
- `version.json` liberado apenas após publicação completa
