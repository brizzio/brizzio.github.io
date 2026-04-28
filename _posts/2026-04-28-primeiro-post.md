---
layout: post
title: "Primeiro post"
date: 2026-04-28 10:45:00 -0300
description: Como organizar um artigo em Jekyll usando front matter YAML e corpo em Markdown.
featured: true
reading_time: 4 min
categories: blog
tags:
  - jekyll
  - yaml
  - markdown
cover_image: /assets/images/hero.jpg
cover_alt: Imagem de capa do site usada como exemplo de post
---

Este e o primeiro post do blog.

Use a pasta `_posts` para criar novos artigos. O nome do arquivo deve seguir o formato:

```text
AAAA-MM-DD-titulo-do-post.md
```

Cada artigo comeca com um bloco `front matter`, como este:

```yaml
---
layout: post
title: "Titulo do artigo"
date: 2026-04-28 10:45:00 -0300
categories: blog
description: "Resumo curto do artigo"
featured: true
reading_time: 6 min
tags:
  - jekyll
  - yaml
  - markdown
cover_image: /assets/images/hero.jpg
cover_alt: Descricao curta da imagem de capa
---
```

Depois desse bloco, o restante do arquivo e Markdown puro. Ou seja, sim: voce pode misturar dados estruturados em YAML com texto livre em MD no mesmo post.

Campos recomendados:

- `description`: resumo para cards e SEO.
- `featured`: destaca o artigo nas listagens.
- `reading_time`: tempo estimado de leitura.
- `tags`: classificacao visual do artigo.
- `cover_image` e `cover_alt`: imagem de capa e texto alternativo.
