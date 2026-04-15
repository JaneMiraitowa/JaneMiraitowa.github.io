---
layout: default
title: 生活日常
---

<div class="post-tabs">
    <span class="tab active">生活日常</span>
</div>

<p style="margin-bottom: 20px; color: #cdd6f4; font-size: 1.05rem;">这里是我的生活日常、感悟、碎碎念~</p >

{% for post in site.categories.生活日常 %}
<div class="post-card">
    < img src="{{ post.cover | default: 'https://picsum.photos/id/64/200/120' }}" alt="文章封面" class="post-cover">
    <div class="post-info">
        <h2 class="post-title"><a href=" ">{{ post.title }}</a ></h2>
        <div class="post-meta">
            <span><i class="fa-solid fa-calendar-days"></i> {{ post.date | date: "%Y年%m月%d日" }}</span>
            <span><i class="fa-solid fa-eye"></i> {{ post.reading_time | default: 6 }}阅读</span>
            <span><i class="fa-solid fa-comment"></i> {{ post.comments | default: 5 }}评论</span>
            <span><i class="fa-solid fa-heart"></i> {{ post.likes | default: 1 }}点赞</span>
        </div>
        <p class="post-excerpt">
            {{ post.excerpt | strip_html | truncate: 160 }}
        </p >
        <span class="post-category">{{ post.categories | first }}</span>
    </div>
</div>
{% endfor %}

<button class="more-btn">查看更多</button>