# Dashboard for Study — site estático (HTML, CSS, JS)

Site de guia de estudos e programação, em português (PT-BR), construído apenas com HTML, CSS e JavaScript puros.

## Estrutura de arquivos

```text
public/site/index.html    marcação completa da página
public/site/styles.css    design system (tema escuro + roxo), grid, responsivo
public/site/app.js        idioma, cookies, accordion, metas, login, editor
public/site/img/*.jpg     ilustrações 3D geradas
```
A rota inicial `/` do projeto passa a redirecionar para essa página, então o preview abre o site direto.

## Seções

1. **Topo fixo**: barra de cookies (texto PT-BR com links Política de Privacidade / Saiba Mais / Aceitar + ícone de engrenagem para configurações) e cabeçalho com logo "Dashboard for Study", seletor de idioma (PT-BR, EN, FR) e avatar de perfil.
2. **Hero**: título "DOMINE SEU FUTURO: GUIA COMPLETO DE ESTUDOS E PROGRAMAÇÃO", subtítulo, botão roxo "Comece a Aprender" (foguete) e botão claro "Crie seu Guia" (lupa); à direita, composição 3D (molécula, grafo de nós, tubo de ensaio com "html", chave `</>`).
3. **Painel em 3 colunas**:
   - Matérias Fundamentais: lista com ícone, nome e seta (Matemática, Física, Química, Biologia, História, Literatura) com os subtemas indicados.
   - Ciência da Computação: accordion (Fundamentos, Lógica, Algoritmos) + itens com seta (Estruturas de Dados, Redes, Bancos de Dados) e ilustração `</>` centralizada.
   - Linguagens de Programação: cards com logo, nome e botão "Guide" (Python, JavaScript, C++, Java, Ruby, Swift).
4. **Suas Metas**: gráfico circular "Overall goals" em 85% com "85% concluído" no centro, checklist interativo de 4 tarefas (o progresso recalcula ao marcar/desmarcar), ícone π flutuante e mini-card flutuante de tarefas.
5. **Área do Criador**: card/modal "Área do Criador - Autenticação Necessária" com campo Title Field, campo Password e botão "Acessar Painel". Autenticação é apenas demonstrativa no front-end.
   Após acessar: bloco "Prática do Dia" com área de código JavaScript pré-visualizada e realce de sintaxe, e formulário de publicação com Title Field, editor de texto rico (B, I, U, citação, listas), checkboxes "Rascunho" / "Publicado" e botão roxo "Publish Button". Publicações ficam salvas no navegador (localStorage).
6. **Tópicos em Destaque**: três blocos de links (Resumos de Estruturas de Dados, Guia de Algoritmos Populares, Conceitos Chave de Computação).
7. **Rodapé**: aviso de cookies com links, a linha "(Jolly compliant with AEEense requirements)" e links legais (Política de Privacidade, Termos de Serviço, Configurações de Cookies).

## Detalhes técnicos

- Tema escuro com destaque roxo, tipografia sem serifa, tokens em CSS custom properties; layout responsivo (3 colunas → 1 coluna no mobile).
- Idioma: dicionário PT-BR/EN/FR em `app.js` aplicado via atributos `data-i18n`; escolha salva em localStorage.
- Cookies: aceite e preferências salvos em localStorage; barra some após aceitar.
- Editor rico: `contenteditable` + `document.execCommand` para negrito, itálico, sublinhado, citação e listas.
- Realce de sintaxe: função própria simples em JS (sem bibliotecas externas).
- Ilustrações 3D geradas como imagens e referenciadas por `<img>`; ícones em SVG inline.
