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

Tweets
======

<p id="tweets">
Loading...
</p>

<script src="http://twitterjs.googlecode.com/svn/trunk/src/twitter.min.js"></script>

<script type="text/javascript">
  getTwitters('tweets', {
    id: 'lantiga',
    count: 5,
    enableLinks: true,
    clearContents: true,
    template: '<span>%time%</span> %text%'
  });
</script>

Open source
===========

[vmtk](http://www.vmtk.org)
[Bunjee](https://github.com/orobix/bunjee)
[cyitk](https://github.com/lantiga/cyitk)
[archTk](http://archtk.github.com)
