---
layout: default
title: 生活日常
---

<div class="post-tabs">
    <span class="tab active">生活日常</span>
</div>

<p style="margin-bottom: 20px; color: #ccc;">这里是我的生活日常、感悟、碎碎念~</p >

{% for post in site.categories.生活日常 %}
<div class="post-card">
    < img src="{{ post.cover | default: 'https://picsum.photos/id/64/200/120' }}" alt="文章封面" class="post-cover">
    <div class="post-info">
        <h2 class="post-title"><a href=" ">{{ post.title }}</a ></h2>
        <div class="post-meta">
            {{ post.date | date: "%Y年%m月%d日" }}
        </div>
        <p class="post-excerpt">
            {{ post.excerpt | strip_html | truncate: 160 }}
        </p >
    </div>
</div>
{% endfor %}