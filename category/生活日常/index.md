---
layout: default
title: 生活日常
---

<div class="category-page">
  <h2 class="category-title">生活日常</h2>
  <p class="category-desc">这里是我的生活日常、感悟、碎碎念~</p >

  <div class="posts-list">
    {% for post in site.categories.life %}
      <div class="post-card">
        <a href=" ">
          <div class="post-cover">
            {% if post.cover %}
              < img src="{{ post.cover }}" alt="{{ post.title }}">
            {% else %}
              < img src="https://picsum.photos/id/64/200/120" alt="文章封面">
            {% endif %}
          </div>
          <div class="post-info">
            <h3 class="post-title">{{ post.title }}</h3>
            <div class="post-meta">
              <span>{{ post.date | date: "%Y年%m月%d日" }}</span>
              <span>👁 {{ site.data.busuanzi[post.url] | default: 6 }} 阅读</span>
              <span>💬 {{ post.comments | size | default: 5 }} 评论</span>
              <span>❤️ {{ post.likes | default: 1 }} 点赞</span>
            </div>
          </div>
        </a >
      </div>
    {% endfor %}
  </div>

  <div class="more-btn">
    <a href="/#posts" class="btn">查看更多</a >
  </div>
</div>