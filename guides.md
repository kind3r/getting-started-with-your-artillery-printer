---
title: Guides
updated: 30-05-2020
---

Deep dive on topics I considered important and I noticed beginers are struggling with understanding, but also some advanced topics and experiments I did.

<div class="bloglist">
  {% for post in site.posts %}
    <a href="{{ post.url }}" class="blogpost" style="background-image: url({{ post.cover }})">
      <span>{{ post.title }}</span>
    </a>
  {% endfor %}
  <div style="clear: both">&nbsp;</div>
</div>