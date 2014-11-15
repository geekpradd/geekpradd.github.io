---
layout: post
title: Minifying HTML5 Code From Sublime Text 3
---

Nowadays, Websites have become massive in size with lots of content and features. While in the developed world, Internet speeds are very fast and therefore large size of websites doesn't make much difference. However, majority of the world still uses DSL type connections which are very slow. As Web Developers, we should try to reduce the size of our code such that loading speeds for those users become less. It might not seem like a big deal for small sites, but for large websites, it helps a lot.

![Slow](/images/internet.jpg "Slow Internet")

##Minifying in Sublime Text

So, a lot of HTML Minification Sites are available on the Internet but these tools are not intuitive as You have to paste your code into the site, copy the output and manually save them in your Code Editor of choice.

If you are using Sublime Text 3, then you can easily skip this and manage two versions of your code, one minified and one for development. This plugin of mine will minify your HTML, CSS3 and Javascript code files.

##Installing HTML Minifier for Sublime Text

My plugin can be installed by searching for HTML Minifier on Package Control in Sublime Text 3. To do so, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and select `Package Control: Install Packages`. From there search for HTML5 Minifier and press enter to Install it.

You can install Package Control by following these steps: [https://sublime.wbond.net/installation](https://sublime.wbond.net/installation)

##Using It

In order to minify your HTML5 code, Click on the HTML5 Minifier option and click Minify Current File. A .min file be added onto the current directory where you are working.

Alternatively, Right Click on the Editor area or the sidebar and click 'Minify HTML5 File'.

For example, if you are working on a file 'main.css' in the location 'C:\Projects\' then a minified file will be created at 'C:\Projects\' with the name main.min.css making the full path 'C:\Projects\main.min.css'.

This is done to keep two versions of the codebase, one minified and the other development version.

##Putting it into Practice

So once you have the plugin installed, managing minfied versions of your site will be a breeze. Just remember to use .min links to your CSS and Javascript files and trust me, loading times will decrease a lot for your sites.

[Source On GitHub](https://github.com/geekpradd/sublime-html5-minifier/)

[Link on Sublime Package Control](https://sublime.wbond.net/packages/HTML%20Minifier)


