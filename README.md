# GPT Force v20 | Editor organizado e backup de configurações

## UX
- Seleção por localização física na tela: Topo, Tela inicial, Mensagens e resposta, Barra inferior
- Ao escolher a área, o segundo seletor exibe apenas os controles daquela região, em ordem de leitura
- Ajustes por teclado fechado ou aberto aparecem apenas na seção Barra inferior
- O painel tem rolagem interna em telas mais curtas, sem tomar a conversa inteira

## Backup
- **Salvar**: preserva o funcionamento anterior e grava no localStorage
- **Exportar**: arquivo JSON versionado com posições compartilhadas, perfis aberto/fechado, fontes, espaçamentos, ícones e os dois degradês
- Em iPhone com API de compartilhamento, Exportar abre o menu de compartilhamento do sistema, permitindo salvar em Arquivos
- **Importar**: valida o arquivo e exibe prévia sem gravar, é preciso confirmar com Salvar
- Arquivos inválidos não afetam as configurações em uso

## Compatibilidade
- Chaves de armazenamento e estrutura interna dos ajustes mantidas para preservar preferências da v19
- Force, captura de teclas, corretor nativo, temporizador de 5 segundos e listas não alterados
- Cache Busting atualizado para v20, com version.json publicado por último

## Testes
- Verificação estática, testes de interface e regressão via Playwright Chromium, não substituem a validação no Safari do iPhone
