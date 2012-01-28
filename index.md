---
layout: default
---

Posts
=====

{% for post in site.posts %}
  * <span>{{ post.date | date_to_string }}</span> [ {{ post.title }} ]( {{ post.url }} )
{% endfor %}

Tweets
======

<div id="tweets">
Loading...
</div>

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

Projects
========

* [vmtk](http://www.vmtk.org)
* [cyitk](https://github.com/lantiga/cyitk)
* [archTk](http://archtk.github.com)

