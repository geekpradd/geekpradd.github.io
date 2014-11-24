---
layout: post
title: Accessing Javascript Arguments from an Array
permalink: javascript-arguments-arrays
tags:
- javascript
- tricks
---

For Python programmers, accessing Attribute values without actually defining them is very easy using `*args`. This allows to create powerful functions while writing less code. Given below is a function written without using `*args`:

{% highlight python %}
def print_in_new_line(a,b,c):

  print(a)
  print(b)
  print(c)


{% endhighlight %}

This function isn't very useful but it will suffice for our purposes. The function takes 3 variables and prints them in separate lines. But what if we pass 5 arguments? The function will raise an error. By using `*args` we can simplify this function while allowing infinite arguments. Here's the code:

{% highlight python %}
def print_in_new_line(*args):

  for value in args:
    print(value)


{% endhighlight %}

But while many Python programmers use `*args`, very few Javascript coders actually know that something like this can be done in Javascript as well. Here is the code to show how it's done:

{% highlight javascript %}

function sum() {
    var val = 0;
    for (var i = 0, len = arguments.length; i < len; ++i) {
        val += arguments[i];
    }
    return val;
}

sum(1, 2, 3) //Will return 6

{% endhighlight %}

This is possible by using a function's arguments array. Then you can use the Arguments like any other members of an array in your function. It's easy and awesome to use.

