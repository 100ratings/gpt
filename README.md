# GPT Force v33 | Marcador confiável e degradê inferior contínuo

## Marcador visual do truque, prioridade
- Durante a contagem, somente o ponto da posição forçada desaparece, por exemplo `23 Joaninha 🐞`
- A implementação agora desativa o marcador nativo desse único item durante a contagem e desenha o número sem ponto usando um pseudo-elemento normal, mais compatível com Safari que alterar o conteúdo de `::marker` isoladamente
- O número permanece visível e os outros números preservam seus pontos
- Após 5 segundos, o marcador normal volta a aparecer (`23. Joaninha 🐞`)
- Durante o sexto segundo, o emoji perde opacidade de maneira gradual até desaparecer, sem deslocar o texto
- Cancelar a revelação ou abrir uma nova conversa restaura o marcador, sem temporizadores atrasados

## Degradê inferior
- Reativado um degradê progressivo suave junto à barra inferior, com início discreto e escurecimento contínuo na região de rolagem
- A máscara inferior termina em transparência total antes da borda, para que um item que ultrapasse a área visível não apareça truncado
- A altura, a posição e a intensidade do degradê continuam ajustáveis no editor, com novos padrões iniciais para configurações sem valores salvos
- **O topo e o degradê superior estão rigorosamente iguais à v32**, verificados por comparação literal

## Funcionalidades preservadas
- Modos normal/secreto e código OP=23
- Peek por 3 segundos, com todas as configurações de tamanho, posição e opacidade preservadas
- Listas, temporizadores, editor, modo da seta com teclado, backups e orientação de tela
- O ponto do placeholder continua reservado somente ao modo secreto

## Validação
- Testes automatizados no Chromium: posição OP=23, número sem ponto durante a contagem, ponto restaurado aos 5 segundos, fade do emoji até os 6 segundos, cancelamento e nova conversa
- Comprovação visual por captura de tela do item 23 sem ponto
- Sintaxe JavaScript validada
- Teste físico no Safari do iPhone ainda é necessário para confirmar o comportamento final no aparelho

## Publicação
- Publicação direta no repositório 100ratings/gpt
- Cache busting v33 no HTML, manifesto e carregamento das listas
- version.json atualizado por último para liberar a atualização manual
