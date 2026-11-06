# GPT Force v24 | Faixa preta inferior corrigida

## Problema corrigido
Na v23 a barra inferior já era transparente, mas a máscara de transparência da conversa reduzia a visibilidade dos últimos itens para aproximadamente 27% no fundo da tela, o que parecia uma faixa preta.

## Mudança
- A área da conversa alcança a borda inferior, incluindo o espaço seguro do iPhone quando houver
- A máscara inferior foi recalibrada para manter o conteúdo perceptível por trás do campo de entrada e do aviso, inclusive com opacidade do degradê configurada para 100%
- O degradê continua configurável por altura, posição e opacidade
- O campo de mensagem e o aviso mantêm suas posições, a área clicável dos botões permanece a mesma
- Se não houver mais itens na lista naquela posição de rolagem, o fundo naturalmente continuará preto, pois não existe texto abaixo do último item

## Preservação
- Código secreto, corretor nativo, listas, cabeçalho transparente, botão de revelar em 5 segundos, editor e configurações salvas mantidos
- Backups v23 continuam compatíveis
- Cache Busting atualizado para v24, com version.json publicado por último
- Atualização manual por “Deseja atualizar o app” no menu da v23

## Testes
- Comparação visual entre v23 e v24 com 100 nomes em viewport móvel 428 × 926
- Código OP convertido para Li, envio “Liste 100 celebridades”, 100 itens criados, sem erros de JavaScript
- Comparada a máscara no rodapé: aproximadamente 0,269 na v23 e 0,711 na v24 com configuração padrão
- Safari/PWA físico no iPhone requer validação final
