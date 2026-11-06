# GPT Force v23 | Conteúdo sob a barra e opacidade dos degradês

## Transparência inferior
- A lista continua rolando até atrás do campo de mensagem e do aviso de rodapé
- A camada preta sólida do degradê inferior foi desativada, o desaparecimento agora ocorre pela máscara de transparência da conversa
- Os controles de altura e posição inferior passaram a atuar na própria máscara, mantendo as posições salvas
- O topo, aprovado na v22, mantém sua aparência por padrão

## Ajustes de opacidade
- Novo controle de opacidade inferior na seção Barra inferior, 0% a 100%, de 1 em 1%, padrão inicial 85%
- Novo controle de opacidade superior na seção Topo, 0% a 100%, de 1 em 1%, padrão inicial 100%
- Ambos são independentes e podem ser salvos, exportados e importados
- Arquivos de backup das versões anteriores continuam compatíveis, mesmo sem os dois campos novos

## Seleção de textos
- Elementos fixos da interface (título ChatGPT, rodapé, menus, tela de boas-vindas e botões) não são mais selecionáveis
- Textos das perguntas e respostas continuam selecionáveis, o textarea preserva a seleção e o corretor nativo

## Funcionalidades preservadas
- Force OP = 23, captura secreta, corretor nativo do iOS, botão de microfone/voz, temporizador, listas e editor
- Atualização manual pelo primeiro item do menu de conversas recentes
- Versionamento de cache v23, marcador version.json atualizado por último

## Validação
- Testado com Playwright Chromium em layout móvel, incluindo força OP = 23, sobreposição de conteúdo sob o campo, seletividade dos textos, controles independentes de opacidade, persistência e importação de backups v22
- A aparência no Safari do iPhone ainda requer a confirmação do usuário
