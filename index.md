---
title: Home
layout: default
---

Posts
=====

{% for post in site.posts %}
  * <span>{{ post.date | date_to_string }}</span> [ {{ post.title }} ]( {{ post.url }} )
{% else %}
  No posts so far
{% endfor %}
