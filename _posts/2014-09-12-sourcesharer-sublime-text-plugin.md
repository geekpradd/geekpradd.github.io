---
layout: post
title: Example content
---

[SourceSharer](http://www.sourcesharer.hol.es) as you know is a site created by me and Akshat to help in sharing Source Code with your friends and others all around the world. We provide a direct link based sharing system to allow code access to only those that have your shared link and we also provide embed features to directly share your SourceSharer code on your website.

But, I realised that creating SourceSharer Shared Code's requires one to copy code, open SourceSharer, enter code, copy link and then share it with your friends on various networks. It's a long proccess and for some other sharing sites, it's even worse. So, how can I reduce these steps?. Well if the code editor used had a plugin to cut 3 steps and directly copy the link to your clipboard, it would be fantastic. Now, I use Sublime Text 3 for development (I'm writing this post on it) and creating Sublime Text Plugins is very easy as it uses Python, my favorite language. So I decided to create a plugin for it..

![sublime](/images/sublime.jpg "Sublime Text 3 with my plugin")

So how does this plugin work?

It's quite simple actually, I use the Sublime Plugins API to copy the code of the current file, use urllib in Python to send the code as `POST` data and I copy the returned data to the clipboard. You can view the source on GitHub [here](https://github.com/geekpradd/sublime-sourcesharer-plugin)

##Installing

To install this Plugin, you can use either Package Control or manually install it.

To Install using Package control, first install it from [here](http://sublime.wbond.net) and then Open the Command Pallete, select Package Control-> Install Package and search for SourceSharer and then Install it

To Install Manually, incase the above doesn't work for you download [this zip](https://github.com/geekpradd/sublime-sourcesharer-plugin/archive/v1.1.1.zip), extract it and then Paste it in your Sublime Packages directory.
You can get this directory by Clicking on Preferences (Menu bar) - Browse Packages

##Usage

Usage is very simple, to share the code of your current working file, simply click on SourceSharer in the Menu and select the Share Source Code option. Or you can use the shortcut key <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>.

After doing so, a output panel will open up at the bottom (This may take time if you have  very slow Internet) and the SourceSharer link will be automatically copied to the Clipboard. You can now share this with your friends effortlessly!.

[Source On GitHub](https://github.com/geekpradd/sublime-sourcesharer-plugin)
Sublime Text 3 SourceSharer Plugin created by Pradd. SourceSharer created by Akshat and Pradd.
