---
layout: default
title: 生活日常
---

<div class="category-page">
  <h2 class="category-title">生活日常</h2>
  <p class="category-desc">这里是我的生活日常、感悟、碎碎念~</p >

  <div class="posts-list">
    {% for post in site.posts %}
      {% if post.categories contains "生活日常" %}
      <div class="post-card">
        <div class="post-cover">
          {% if post.cover %}
            < img src="{{ post.cover | relative_url }}" alt="{{ post.title }}">
          {% else %}
            < img src="/assets/images/cover1.jpg" alt="文章封面">
          {% endif %}
        </div>
        <div class="post-info">
          <h3 class="post-title">
            <a href=" ">{{ post.title }}</a >
          </h3>
          <div class="post-meta">
            <span>{{ post.date | date: "%Y年%m月%d日" }}</span>
            {% if post.categories %}
              <span>· {{ post.categories | first }}</span>
            {% endif %}
          </div>
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 60 }}</p >
        </div>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</div>