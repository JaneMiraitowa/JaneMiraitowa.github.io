---
layout: default
title: 技术笔记
category: 技术笔记
---

# 技术笔记
这里是我的网络安全、编程学习、技术干货分享~

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "tech" %}
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