---
layout: default
title: 技术笔记
---

<div class="category-page">
  <h2 class="category-title">技术笔记</h2>
  <p class="category-desc">这里记录我的网络安全学习、技术干货、工具使用心得~</p >

  <div class="posts-list">
    {% for post in site.categories.技术笔记 %}
      <div class="post-card">
        <div class="post-cover">
          {% if post.cover %}
            < img src="{{ post.cover }}" alt="{{ post.title }}">
          {% else %}
            < img src="/assets/images/pic1.jpg" alt="文章封面">
          {% endif %}
        </div>
        <div class="post-info">
          <h3 class="post-title"><a href=" ">{{ post.title }}</a ></h3>
          <div class="post-meta">
            <span>{{ post.date | date: "%Y年%m月%d日" }}</span>
            <span>· {{ post.categories }}</span>
          </div>
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p >
        </div>
      </div>
    {% endfor %}
  </div>
</div>