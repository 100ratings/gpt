# GPT Force v18 | Área de toque ampliada

Baseada diretamente na v17 aprovada no iPhone, com as 12 listas e seus recursos mantidos

## Mudança pontual

- Tanto o microfone quanto o botão à direita armam a revelação, usando exatamente a mesma função
- A faixa inteira dos dois ícones também reage ao toque, inclusive o espaço entre eles
- A faixa de toque foi ampliada de aproximadamente 67 × 36 para 83 × 50 pixels CSS, sem mover visualmente os ícones
- O toque é ignorado durante geração, edição, temporizador em andamento, listas sem emoji, ou depois da revelação
- Quando a seta de Enviar aparece, a faixa não interfere no envio da pergunta
- Após o toque válido, surge o ponto em “Perguntar ao ChatGPT.” e, cinco segundos depois, o emoji é ocultado sem deslocar o texto
- A v17, incluindo o código secreto e o corretor nativo, não foi alterada fora desses controles

## Publicação

Copie os arquivos para a raiz do repositório GitHub Pages, mantendo a pasta `listas`, e recarregue o aplicativo

## Verificação

Testado em Chromium com emulação de iPhone 12 Pro Max, incluindo acionamento pelos dois ícones e pelo espaço entre eles, proteção contra vários toques, preservação da rolagem, botão Enviar e testes de regressão da v17. O toque físico no Safari iOS ainda deve ser validado no iPhone
