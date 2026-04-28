---
layout: blog
title: Blog
permalink: /blog/
description: Artigos, notas tecnicas e registros de projetos.
---

Esta pagina mistura as duas camadas.

- A estrutura geral vem de [`_data/blog.yml`](/C:/Users/opera/Desktop/brizzio.github.io/_data/blog.yml:1).
- O conteudo livre desta introducao continua vindo deste arquivo `blog.md`.
- Cada artigo em `_posts` usa `front matter` YAML no topo e Markdown no corpo.

Exemplo minimo de um post:

```yaml
---
layout: post
title: "Titulo do artigo"
date: 2026-04-28 10:45:00 -0300
description: Resumo curto do artigo.
tags:
  - jekyll
  - markdown
  - yaml
---
```

Depois do bloco acima, o restante do arquivo e texto Markdown normal.
