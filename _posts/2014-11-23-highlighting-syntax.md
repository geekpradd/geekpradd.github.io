---
layout: post
title: Highlighting Syntax in Jekyll
permalink: highlight-syntax-jekyll
tags:
- ruby
- jekyll
---

Highlighting Syntax in blogs created by Jekyll is actually very easy. You can use the Pygments syntax highlighter provided it's enabled in your YAML front-matter. Here is a demo highlight and below it is the code to do so:

{% highlight python linenos %}
def hey():
  print ("Ok!")

{% endhighlight %}

The sample code to do so:
{% highlight text %}
{% highlight python linenos %}
def hey():
  print ("Ok!")

{% endhighlight %}
{% endhighlight %}
</code>
</pre>

This was a pretty short post but It does it's job. See you later!
