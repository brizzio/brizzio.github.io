---
layout: post
title: "Primeiro post"
date: 2026-04-28 10:45:00 -0300
description: Como organizar um artigo em Jekyll usando front matter YAML e corpo em Markdown.
categories: blog
tags:
  - jekyll
  - yaml
  - markdown
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
tags:
  - jekyll
  - yaml
  - markdown
---
```

Depois desse bloco, o restante do arquivo e Markdown puro. Ou seja, sim: voce pode misturar dados estruturados em YAML com texto livre em MD no mesmo post.
