---
layout: post
title: Connecting Git with your online GitHub Repository
permalink: git-setup-github
tags:
- git
- cmd
- GitHub
---

Git is the most widely used version control platform for programmers and nowadays it is mostly used with GitHub for powering open source projects. In this post, I'll show you how you can connect Git with GitHub so that you can make and push changes directly from your PC. Before proceeding, Download Git from [this link](http://git-scm.com/downloads).

##Set Up

Firstly, I recommend you to create a folder dedicated to GitHub projects in your PC. For me it's, `C:\GitHub Local\`. Once you create this folder, create a sub folder in it to match your project name. For this post, I'll use the GitHub repo of my upcoming site DiscoverPython. So create the subfolder now.

##Starting Git

Once done, (I'm considering you have Windows) right click in an empty space in the empty folder. In
the context menu click Git Bash.

![git](/images/git-context.jpg "git")

A Git Prompt will open up. In it enter, `git init`. Now, an empty git repo has been set up. In order to clone your online repo to the local one, you need to get the HTTPS clone url. This is available in your Online GitHub repo page. In my case it was `https://github.com/DiscoverPython/discoverpython.github.io.git`

![git](/images/clone.jpg "git")

Once you have this, in the Git Bash enter `git remote add origin [whatever your clone url was]`. The result will be something like this:

![git](/images/git.JPG "git")

Now, to get the changes, enter `git pull origin master`. This will copy everything in your online repo to your local repo. Now that Your repo is local, you can make changes in it. Now once the changes are made, you have to add them to the repo, commit them and then you can sync it with the online version. here's how to do that.

I've made some changes in my local repo. But I want to know where I've made the changes. It's easy to do so by typing `git status` in the bash.

![git](/images/git1.JPG "git")

Now that I've modified Index.html, I'll simply enter `git add '*'` to add ALL changed files to the repo. It's easier adding all especially if you have modified many files. Now I need to commit them (A commit is like a track point in the repo where you have made changes). You can do so by entering `git commit -m "A commit comment"`. Enter whatever comment you need to make.

![git](/images/git2.JPG "git")

Now to merge your version (local) with the online version, You'll need to enter your GitHub credentials. You can only do so if you are a contributor to that repository. Here are the commands:

Firstly, enter 'git push origin master'. This will prompt up the following inputs.  You'll need to enter your credentials to successfully merge the versions.

![git](/images/git3.JPG "git")


In the above screenshot, The username and password inputs are not visible because I've set them to be automatically inputed. I'll discuss this in a future post.

That was it. Now you can continue adding updates and merging your local and online versions. Just make sure that, if your repo has many contributors make sure to `git pull origin master` each time you start the bash so that your local version remains updated. If you have any doubts that please leave a comment.
