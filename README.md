# GPT Force v27 | Peek configurável

## O que mudou
- O número do peek (exemplo: OP = 23) continua aparecendo por 2 segundos após o código secreto
- Editor: Área "4 · Barra inferior", com novas propriedades "Peek: posição horizontal e vertical", "Peek: tamanho do número" e "Peek: opacidade"
- Posição X/Y ajustável de 1 em 1 pixel pelas setas (↑↓←→), ou diretamente por valores numéricos
- Perfil de posição independente para teclado "Fechado" e "Aberto", como os demais elementos da barra
- Tamanho do texto de 8 a 48 px, ajustável em 1 px ou por valor direto
- Opacidade de 0% a 100%, ajustável em 1% ou por valor direto
- Ao escolher uma propriedade do peek, o editor exibe uma prévia temporária do número "23" para facilitar o ajuste
- Os novos valores são salvos no mesmo localStorage dos ajustes anteriores e inclusos nas exportações/importações JSON

## Compatibilidade
- Ajustes salvos na versão 26 permanecem intactos, o peek começa com seu visual anterior (posição X=0/Y=0, fonte 10 px, opacidade 100%)
- Backups antigos, sem propriedades do peek, continuam aceitos, usando os padrões para o peek
- O menu de histórico, listas, force e tempos existentes foram mantidos
- **O cabeçalho e o degradê superior não foram alterados**, conferidos por comparação literal dos blocos CSS
- A barra nativa de navegação do teclado iOS (setas e confirmação) não pertence ao site e não foi modificada

## Publicação
- Cache Busting atualizado para v27 nos recursos, arquivo de manifesto e listas
- version.json publicado por último, ativando a atualização manual em "Deseja atualizar o app"

## Testes
- Executados no Chromium headless com HTML carregado diretamente e chamadas de listas simuladas
- Prévia do peek, setas X/Y, entrada numérica, perfis de teclado, tamanho, opacidade, persistência e recarregamento
- Digitação no modo normal, lista de 10 filmes, código OP = 23, desaparecimento do peek em 2 segundos
- Sem erros de JavaScript durante os testes automatizados
- Safari/PWA físico no iPhone ainda requer confirmação
