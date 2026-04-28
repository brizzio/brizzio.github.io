---
layout: page
title: Blog
permalink: /blog/
description: Artigos, notas tecnicas e registros de projetos.
---

Artigos, notas tecnicas e registros de projetos.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%d/%m/%Y" }}
{% endfor %}

