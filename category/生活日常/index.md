---
layout: default
title: 生活日常
category: 生活日常
---

# 生活日常
这里是我的生活日常、感悟、碎碎念~

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "生活日常" %}
      <li>
        <h2>
          <a class="post-link" href=" ">
            {{ post.title | escape }}
          </a >
        </h2>
        <span class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</span>
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p >
      </li>
    {% endif %}
  {% endfor %}
</ul>