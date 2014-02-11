
![lantiga](http://www.gravatar.com/avatar/bbefc03adc6ad701064c0c41722b290a&s=180)

<br/>

I'm a co-founder at [Orobix](http://www.orobix.com), a small company dealing with image analysis, mathematical modeling and data engineering. 

I have a PhD in Bioengineering and worked in research until 2009. Here's my list of [publications](/publications.html).

I'm located in Bergamo, Italy. You can reach me on [Twitter](https://twitter.com/lantiga) or on [GitHub](https://github.com/lantiga).


## Posts

{% for post in site.posts %}
  * <span>{{ post.date | date_to_string }}</span> [ {{ post.title }} ]( {{ post.url }} )
{% else %}
  No posts so far
{% endfor %}

## Open source projects

* [vmtk](http://www.vmtk.org), the Vascular Modeling Toolkit (Python, C++)
* [ki](https://github.com/lantiga/ki), a lisp that macroexpands to JavaScript (JavaScript, sweet.js)
* [react.hiccup](https://github.com/lantiga/ki), an alternative to JSX for React.js (JavaScript, sweet.js)
* [exoref](https://github.com/lantiga/exoref), Clojure reference types on top of Redis (Clojure)
* [clj-toml](https://github.com/lantiga/clj-toml), a TOML parser for Clojure (Clojure)

### At Orobix

* [ranger](https://github.com/orobix/ranger), a tool for launching jobs on large datasets (Go)
* [Balsa](https://github.com/orobix/Balsa), a random decision forest library (C++11)
* [hirop](https://github.com/orobix/hirop), a library for building data collection applications (Clojure)
* [Bunjee](https://github.com/orobix/Bunjee), a Cocoa framework for building medical imaging and visualization applications (ObjectiveC)

### Contributed to

* [Crane](https://github.com/SnowRipple/Crane), a tool for orchestrating Docker containers (Go)
* [pyNS](https://github.com/archTk/pyNS), a 0D/1D solver for hemodynamic simulations (Python)
* [Slicer](http://slicer.org), a multi-platform software for visualization and medical image computing (C++ and Python)
* [ITK](http://itk.org), the Insight Segmentation and Registration Toolkit (C++)


## Colophon

[Solo](http://chibicode.github.io/solo/) theme by [Shy Uesugi](http://chibicode.com/), [MIT License](http://chibicode.mit-license.org/)

